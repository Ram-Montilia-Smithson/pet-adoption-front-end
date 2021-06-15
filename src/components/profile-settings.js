import {UserContext} from "../context/context"
import { Form, Button, Card} from "react-bootstrap";
import React, { useContext, useState } from "react"
import { updateUserById } from "../lib/api";


function ProfileSettings() {

    const userContext = useContext(UserContext)
    const [error, setError] = useState("")
    const [confirmationPassword, setConfirmationPassword] = useState("")
    const [profileData, setProfileData] = useState({
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        tel: "",
        bio: "",
    });

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        // console.log(profileData);
        if (profileData.password === confirmationPassword) {
            let newUserInfo = {}
            for (const property in profileData) {if (profileData[property] !== "") { newUserInfo[property] = profileData[property]}}
            const response = await updateUserById(`http://localhost:5000/api/users/${userContext.user._id}`, newUserInfo)
            console.log(response);
            if (typeof response === "string") {
                setError(response)
            }
            else if (typeof response === "object") {
                setConfirmationPassword("")
                setProfileData({ firstName: "", lastName: "", password: "", email: "", tel: "", bio: ""})
                userContext.user = response
                setError("")
            }
        }
        else {
            setError("passwords do not match")
        }
    };

    return (
        <Card className="d-flex align-items-center justify-content-center bg-transparent">
            <Card.Body>
                <h2 className="text-center mb-4">Profile Settings</h2>
                <Form
                    className="bg-light"
                    onSubmit={(event) => handleOnSubmit(event)}
                    method="post"
                    encType="multipart/form-data"
                >
                    <Form.Group id="first-name">
                        <Form.Label>New First Name</Form.Label>
                        <Form.Control
                            placeholder={userContext.user.firstName}
                            type="text"
                            onChange={(event) => setProfileData({ ...profileData, firstName: event.target.value })}
                            value={profileData.firstName}
                            name="first name"
                        />
                    </Form.Group>
                    <Form.Group id="last-name">
                        <Form.Label>New Last Name</Form.Label>
                        <Form.Control
                            placeholder={userContext.user.lastName}
                            type="text"
                            onChange={(event) => setProfileData({ ...profileData, lastName: event.target.value })}
                            value={profileData.lastName}
                            name="last name"
                        />
                    </Form.Group>
                    <Form.Group id="tel">
                        <Form.Label>New Phone Number</Form.Label>
                        <Form.Control
                            placeholder={userContext.user.tel}
                            type="tel"
                            onChange={(event) => setProfileData({ ...profileData, tel: event.target.value })}
                            value={profileData.tel}
                            name="tel"
                        />
                    </Form.Group>
                    <Form.Group id="email">
                        <Form.Label>New Email</Form.Label>
                        <Form.Control
                            placeholder={userContext.user.email}
                            type="email"
                            name="email"
                            onChange={(event) => setProfileData({ ...profileData, email: event.target.value })}
                            value={profileData.email}
                        />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(event) => setProfileData({ ...profileData, password: event.target.value })}
                            value={profileData.password}
                            required
                        />
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>New Password Confirmation</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(event) => setConfirmationPassword(event.target.value)}
                            value={confirmationPassword}
                            required
                        />
                    </Form.Group>
                    <Form.Group id="bio">
                        <Form.Label>Wanna tell us something new about yourself?</Form.Label>
                        <Form.Control
                            placeholder={userContext.user.bio}
                            as="textarea"
                            rows={3}
                            onChange={(event) => setProfileData({ ...profileData, bio: event.target.value })}
                            value={profileData.bio}
                        />
                    </Form.Group>
                    <div className="text-danger bg-warning rounded my-2">{error}</div>
                    <Button className="w-100" type="submit">
                        save changes
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
export default ProfileSettings