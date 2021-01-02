import React from "react";
import { Form, Button, Card } from "react-bootstrap";

// Login API
// route: ‘/login’ [POST]
// The login api is responsible for logging in existing users
// Validate all the user input is valid
// Check the email and password match an existing user
// Retrieve the users data from the database and login the user.
//     Fields:
// Email address
// Password

export default function Login() {
    
    return (
        <>
            <Card className="d-flex align-items-center justify-content-center bg-transparent">
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {/* {error && <Alert variant="danger">{error}</Alert>} */}
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required />
                        </Form.Group>
                        <Button className="w-100" type="submit">
                            Log In
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                {/* Need an account? <Link to="/signup">Sign Up</Link> */}
            </div>
        </>
    );
}