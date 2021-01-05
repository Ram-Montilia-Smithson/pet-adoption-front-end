import UserContext from "../context/context"
import { Form, Button, Card} from "react-bootstrap";
import React, { useContext, useState } from "react"
import { updateUserById, getUsers } from "../lib/api";


function ProfileSettings() {

    const userContext = useContext(UserContext)

    const [confirmationPassword, setConfirmationPassword] = useState("")
    const [profileData, setProfileData] = useState({
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        tel: "",
        bio: "",
    });

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (profileData.password === confirmationPassword) {
            // Ensure that if the email is being changed it’s not already in use
            let newUserInfo = {}
            for (const property in profileData) {if (profileData[property] !== "") { newUserInfo[property] = profileData[property]}}
            console.log(userContext._id);
            updateUserById(userContext._id, newUserInfo)
            setConfirmationPassword("")
            setProfileData({ firstName: "", lastName: "", password: "", email: "", tel: "", bio: ""})
        }
        else { console.log("passwords do not match"); }
    };

    return (
        <Card className="d-flex align-items-center justify-content-center bg-transparent">
            <Card.Body>
                <h2 className="text-center mb-4">Profile Settings</h2>
                {userContext.admin && <h3>Admin</h3>}
                <Form
                    className="bg-light"
                    onSubmit={(event) => handleOnSubmit(event)}
                    // action="settings"
                    method="post"
                    encType="multipart/form-data"
                >
                    <Form.Group id="first-name">
                        <Form.Label>New First Name</Form.Label>
                        <Form.Control
                            placeholder={userContext.firstName}
                            type="text"
                            onChange={(event) => setProfileData({ ...profileData, firstName: event.target.value })}
                            value={profileData.firstName}
                            name="first name"
                        />
                    </Form.Group>
                    <Form.Group id="last-name">
                        <Form.Label>New Last Name</Form.Label>
                        <Form.Control
                            placeholder={userContext.lastName}
                            type="text"
                            onChange={(event) => setProfileData({ ...profileData, lastName: event.target.value })}
                            value={profileData.lastName}
                            name="last name"
                        />
                    </Form.Group>
                    <Form.Group id="tel">
                        <Form.Label>New Phone Number</Form.Label>
                        <Form.Control
                            placeholder={userContext.tel}
                            type="tel"
                            onChange={(event) => setProfileData({ ...profileData, tel: event.target.value })}
                            value={profileData.tel}
                            name="tel"
                        />
                    </Form.Group>
                    <Form.Group id="email">
                        <Form.Label>New Email</Form.Label>
                        <Form.Control
                            placeholder={userContext.email}
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
                        <Form.Label>New Bio textarea</Form.Label>
                        <Form.Control
                            placeholder={userContext.bio} //consider fetching data in advance
                            as="textarea"
                            rows={3}
                            onChange={(event) => setProfileData({ ...profileData, bio: event.target.value })}
                            value={profileData.bio}
                        />
                    </Form.Group>
                    <Button className="w-100" type="submit">
                        save changes
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
export default ProfileSettings