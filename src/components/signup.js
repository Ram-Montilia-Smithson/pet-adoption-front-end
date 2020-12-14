import React from "react"
import { Form, Button, Card } from "react-bootstrap"


// Signup Component (inside a modal):


export default function Signup() {

    return (
        <>
            <Card className="d-flex align-items-center justify-content-center bg-transparent">
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {/* {error && <Alert variant="danger">{error}</Alert>} */}
                    <Form>
                        <Form.Group id="first-name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" required />
                        </Form.Group>
                        <Form.Group id="last-name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" required />
                        </Form.Group>
                        <Form.Group id="phone-number">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" required />
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" required />
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