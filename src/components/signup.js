import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap"

import { postUser } from "../lib/api";

// Signup API
// route: ‘/signup’ [POST]
// The signup api is responsible for signing up a new user.
// Validate all the user input is valid
// Check that passwords match
// Make sure the email address is unique
// Store the user in your DB and log the user in
//     Be sure not to save the users password as a plain string. (bcrypt is a great tool for this)

//     Fields:
//     Email Address
// Password(twice to make sure passwords match)
// First and last name
// Phone number


export default function Signup() {

    const [confirmationPassword, setConfirmationPassword] = useState("")
    const [signupData, setSignupData] = useState({
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        tel: "",
        bio: "",
        admin: false,
        pets: [],
        login: false
    });

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (signupData.password === confirmationPassword) {
            postUser(signupData)
            console.log(signupData)
            setConfirmationPassword("")
            setSignupData({firstName: "",lastName: "",password: "",email: "",tel: "",bio: "",admin: false,pets: [],login: false})
        }
        else {
            console.log("passwords do not match");
        }
    };

    return (
        <>
            <Card className="d-flex align-items-center justify-content-center bg-transparent">
                <Card.Title className="text-center mb-4">Signup</Card.Title>
                <Card.Body>
                    {/* {error && <Alert variant="danger">{error}</Alert>} */}
                    <Form
                        className="bg-light"
                        onSubmit={(event) => handleOnSubmit(event)}
                        action="signup"
                        method="post"
                        encType="multipart/form-data"
                    >
                        <Form.Group id="first-name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                onChange={(event) => setSignupData({ ...signupData, firstName: event.target.value })}
                                value={signupData.firstName}
                                required
                            />
                        </Form.Group>
                        <Form.Group id="last-name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                onChange={(event) => setSignupData({ ...signupData, lastName: event.target.value })}
                                value={signupData.lastName}
                                required
                            />
                        </Form.Group>
                        <Form.Group id="phone-number">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Phone Number"
                                onChange={(event) => setSignupData({ ...signupData, tel: event.target.value })}
                                value={signupData.tel}
                                required
                            />
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                onChange={(event) => setSignupData({ ...signupData, email: event.target.value })}
                                value={signupData.email}
                                required
                            />
                        </Form.Group>
                        <Form.Group id="user-bio">
                            <Form.Label>Bio</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="tell me about your self..."
                                onChange={(event) => setSignupData({ ...signupData, bio: event.target.value })}
                                value={signupData.bio}
                                required
                            />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={(event) => setSignupData({ ...signupData, password: event.target.value })}
                                value={signupData.password}
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
                        <Button className="w-100" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                {/* Already have an account? <Link to="/login">Log In</Link> */}
            </div>
        </>
    )
}