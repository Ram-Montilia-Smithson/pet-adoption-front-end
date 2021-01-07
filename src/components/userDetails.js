import { Card } from "react-bootstrap";
import React from "react"


function UserDetails(user) {
    
    return (
        <Card
            className="d-flex align-items-center justify-content-center bg-transparent">
            <Card.Body>
                <Card.Title>First Name: {user.user.firstName}</Card.Title>
                <Card.Subtitle className="mb-2">Last Name: {user.user.lastName}</Card.Subtitle>
                <Card.Text>Email: {user.user.email}</Card.Text>
                <Card.Text>Tel: {user.user.tel}</Card.Text>
                <Card.Text>Bio: {user.user.bio}</Card.Text>
                <h1>and here you add the user's pets</h1>
            </Card.Body>
        </Card>
    )
}
export default UserDetails