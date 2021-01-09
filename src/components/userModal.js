import { Card } from "react-bootstrap";
import React from "react"


function UserModal(props) {
    
    return (
        <Card
            className="d-flex align-items-center justify-content-center bg-transparent">
            <Card.Body>
                <Card.Title>First Name: {props.user.firstName}</Card.Title>
                <Card.Subtitle className="mb-2">Last Name: {props.user.lastName}</Card.Subtitle>
                <Card.Text>Email: {props.user.email}</Card.Text>
                <Card.Text>Tel: {props.user.tel}</Card.Text>
                <Card.Text>Bio: {props.user.bio}</Card.Text>
                <Card.Subtitle>{props.user.savedPets}</Card.Subtitle>
                <Card.Text>User's Pets:
                {props.pets.map(pet => {
                    return (<>
                        <Card.Title>Name: {pet.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Type: {pet.type}</Card.Subtitle>
                        <Card.Img src={pet.image} alt="image of the pet" className="rounded w-25 h-25" />
                    </>)
                })}
                </Card.Text>
                <Card.Text>User's Saved Pets:
                {props.savedPets.map(pet => {
                    return (<>
                            <Card.Title>Name: {pet.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Type: {pet.type}</Card.Subtitle>
                            <Card.Img src={pet.image} alt="image of the pet" className="rounded w-25 h-25" />
                    </>)
                })}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default UserModal