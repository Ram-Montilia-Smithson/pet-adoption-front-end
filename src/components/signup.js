import React, { useContext, useState } from "react";
import { Form, Button, Card } from "react-bootstrap"
import { postUser } from "../lib/api";
import { UserContext } from '../context/context'

export default function Signup({ closeSignupModal }) {
    
    const userContext = useContext(UserContext)

    const [confirmationPassword, setConfirmationPassword] = useState("")
    const [error, setError] = useState("")
    const [signupData, setSignupData] = useState({
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        tel: "",
        bio: "",
        admin: false,
        pets: [],
        login: true
    });

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        if (signupData.password === confirmationPassword) {
            const response = await postUser('/api/users/signup',signupData)
            if (typeof response === "string") setError(`${response}`)
            else if (typeof response === "object") {
                setSignupData({ firstName: "", lastName: "", password: "", email: "", tel: "", bio: "", admin: false, pets: [], login: true })
                setConfirmationPassword("")
                userContext.user = response
                setError("")
                closeSignupModal(response)
            }
        }
        else setError("passwords do not match")
    };

    return (
        <>
            <Card className="d-flex align-items-center justify-content-center bg-transparent">
                <Card.Title className="text-center mb-4">Sign Up</Card.Title>
                <Card.Body>
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
                                name="first name"
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
                                name="last name"
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
                                name="tel"
                            />
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={(event) => setSignupData({ ...signupData, email: event.target.value })}
                                value={signupData.email}
                                required
                            />
                        </Form.Group>
                        <Form.Group id="user-bio">
                            <Form.Label>Your Story</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="tell us about your self..."
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
                        <div className="my-2 bg-warning rounded text-danger border border-primary">{error}</div>
                        <Button className="w-100" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}