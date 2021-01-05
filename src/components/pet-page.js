import { Button, Card, ListGroup } from "react-bootstrap"
import React from "react"

function PetPage(petoo) {

    let pet = JSON.parse(window.localStorage.getItem('newPet'))
    console.log(pet);

    return (
        <>
            <h2 className="text-center mb-4">{pet.name} the {pet.type} details:</h2>
            <Card className="d-flex align-items-center justify-content-center bg-transparent">
                <Card.Body>
                    <Card.Title>{pet.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{pet.type}</Card.Subtitle>
                    <Card.Img src={pet.image} alt="image of the pet" />
                    <Card.Text>{pet.breed}</Card.Text>
                    <Card.Text>{pet.status}</Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{pet.height}CM</ListGroup.Item>
                        <ListGroup.Item>{pet.weight}KG</ListGroup.Item>
                        <ListGroup.Item>{pet.color}</ListGroup.Item>
                    </ListGroup>
                    <Card.Text>{pet.bio}</Card.Text>
                    {/* find a way to present weather yes or no */}
                    <Card.Text>{pet.hypoallergenic && "hypoallergenic"}</Card.Text>
                    <Card.Text>dietary restrictions: {pet.dietaryRestrictions}</Card.Text>
                    {/* {pet.status === "owned" && <><Button variant="danger">return the pet</Button></>}
                    {pet.status === "fostered" && <><Button variant="info">adopt the pet</Button></>}
                    {!pet.status && <><Button variant="primary">foster the pet</Button>
                        <Button variant="primary">adopt the pet</Button></>}
                    <br /><Button>save for later</Button> */}
                </Card.Body>
            </Card>
        </>
    )
}
export default PetPage