import React, { useState, useContext } from "react";
import { Form, Button, Card } from "react-bootstrap";
// import { useHistory } from "react-router";
import { postUser } from "../lib/api";
import {UserContext} from '../context/context'

export default function Login() {

    const userContext = useContext(UserContext)

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const onSubmit = (event) => {
        event.preventDefault();
        postUser('/api/users/login',loginData).then((user) => {
            console.log(user);
            userContext.user = user
        })
    }

    return (
        <>
            <Card className="d-flex align-items-center justify-content-center bg-transparent">
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
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
            </div>
        </>
    );
}