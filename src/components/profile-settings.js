import UserContext from "../context/context"
import { Form, Button, Card} from "react-bootstrap";
import React, { useContext, useState } from "react"
import { updateUserById } from "../lib/api";

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
        // pets: [],
    });

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (profileData.password === confirmationPassword) {
            // Update User API
            // Route ‘/user/: id’[PUT](protected to logged in user)
            // This API allows you to change your settings while logged in.
            // Validate user inputs
            // Ensure that if the email is being changed it’s not already in use
            // find one based on email, then checking if values === "", if so, no update field
            // if !==, then update field
            // postUser('http://localhost:5000/api/users/profile', profileData)
            console.log(profileData)
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
                    // onSubmit={(event) => handleOnSubmit(event)}
                    // action="settings"
                    method="post"
                    // encType="multipart/form-data"
                >
                    <Form.Group id="first-name">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            placeholder={userContext.firstName}
                            type="text"
                            onChange={(event) => setProfileData({ ...profileData, firstName: event.target.value })}
                            value={profileData.firstName}
                            name="first name"
                        />
                    </Form.Group>
                    <Form.Group id="last-name">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            placeholder={userContext.lastName}
                            type="text"
                            onChange={(event) => setProfileData({ ...profileData, lastName: event.target.value })}
                            value={profileData.lastName}
                            name="last name"
                        />
                    </Form.Group>
                    <Form.Group id="tel">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            placeholder={userContext.tel}
                            type="tel"
                            onChange={(event) => setProfileData({ ...profileData, tel: event.target.value })}
                            value={profileData.tel}
                            name="tel"
                        />
                    </Form.Group>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            placeholder={userContext.email}
                            type="email"
                            name="email"
                            onChange={(event) => setProfileData({ ...profileData, email: event.target.value })}
                            value={profileData.email}
                        />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder={userContext.password}
                            onChange={(event) => setProfileData({ ...profileData, password: event.target.value })}
                            value={profileData.password}
                            required
                        />
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(event) => setConfirmationPassword(event.target.value)}
                            value={confirmationPassword}
                            required
                        />
                    </Form.Group>
                    <Form.Group id="bio">
                        <Form.Label>Bio textarea</Form.Label>
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