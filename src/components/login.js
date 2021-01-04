import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { postUser } from "../lib/api";


// Login API - V
// route: ‘/login’ [POST] - V
// The login api is responsible for logging in existing users - (?)
// Validate all the user input is valid - V
// Check the email and password match an existing user - V
// Retrieve the users data from the database -V and login the user. (X)
//     Fields: - V
// Email address - V
// Password - V

export default function Login() {

    let history = useHistory()

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const onSubmit = (event) => {
        event.preventDefault();
        postUser('http://localhost:5000/api/users/login',loginData)
        // fetch('http://localhost:5000/login', {
        //     method: 'POST',
        //     body: JSON.stringify(loginData),
        //     headers: {'Content-Type': 'application/json'}
        // })
    //     .then(res => {
    //         // if (res.status === 200) {
    //             console.log(res, "res")
    //             // return res.body
    //             // history.push('/') here i need to log in the user
    //             // localStorage.setItem('user', JSON.stringify(data))
    //             // const reload = window.location.reload()
    //         // }
    //         // else {
    //             // const error = new Error(res.error);
    //             // throw error;
    //         // }
    //     })
    //     .catch(err => {
    //         console.error(err);
    //         // alert('Error logging in please try again');
    //     });
    }

    return (
        <>
            <Card className="d-flex align-items-center justify-content-center bg-transparent">
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {/* {error && <Alert variant="danger">{error}</Alert>} */}
                    <Form onSubmit={(event) => onSubmit(event)}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                required
                                name="email"
                                placeholder="Enter email"
                                value={loginData.email}
                                onChange={(event) => setLoginData({...loginData, email: event.target.value})}
                            />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                required
                                name="password"
                                placeholder="Enter password"
                                value={loginData.password}
                                onChange={(event) => setLoginData({...loginData, password: event.target.value})}
                            />
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