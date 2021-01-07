import { Button, Card, ListGroup, Modal } from "react-bootstrap"
import React, { useState } from "react"

function Pet(pet) {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {setIsModalOpen(true)}
    const closeModal = () => { setIsModalOpen(false) }
    
    const handleModalButton = () => { alert("make a pet edit page")}

    return (
        <>
            <h2 className="text-center mb-4">{pet.pet.name} the {pet.pet.type} details:</h2>
            <Card
                onClick={()=> {openModal()}}
                className="d-flex align-items-center justify-content-center bg-transparent">
                <Card.Body>
                    <Card.Title>{pet.pet.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{pet.pet.type}</Card.Subtitle>
                    <Card.Img src={pet.pet.image} alt="image of the pet" />
                    <Card.Text>{pet.pet.breed}</Card.Text>
                    <Card.Text>{pet.pet.status}</Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{pet.pet.height}CM</ListGroup.Item>
                        <ListGroup.Item>{pet.pet.weight}KG</ListGroup.Item>
                        <ListGroup.Item>{pet.pet.color}</ListGroup.Item>
                    </ListGroup>
                    <Card.Text>{pet.pet.bio}</Card.Text>
                    {/* find a way to present weather yes or no */}
                    <Card.Text>{pet.pet.hypoallergenic && "hypoallergenic"}</Card.Text>
                    <Card.Text>dietary restrictions: {pet.pet.dietaryRestrictions}</Card.Text>
                </Card.Body>
            </Card>
            <Modal show={isModalOpen} onHide={closeModal}>
                <span>to edit this pet, please press here</span>
                <Button onClick={() => {handleModalButton()}}/>
            </Modal>
        </>
    )
}
export default Pet