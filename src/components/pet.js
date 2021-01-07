import { Card, Modal, Button, Navbar } from "react-bootstrap"
import React, { useState, useRef } from "react"
import { Link, Route } from "react-router-dom"
import PetPage from "./pet-page"

function Pet(pet) {

    // useEffect(() => {
        // localStorage.setItem("pet", JSON.stringify(pet))
        // return () => {
            
        // }
    // }, [])

    const ref = useRef()

    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const openModal = () => {
        localStorage.setItem("pet", JSON.stringify(pet))
        setIsModalOpen(true)
    }
    const closeModal = () => { setIsModalOpen(false) }

    return (
        <>
            <h2 className="text-center mb-4">{pet.pet.name} the {pet.pet.type} details:</h2>
            <Card
                onClick={()=> {openModal()}}
                className="d-flex align-items-center justify-content-center bg-transparent">
                <Card.Body>
                    <Card.Title>Name: {pet.pet.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Type: {pet.pet.type}</Card.Subtitle>
                    <Card.Img src={pet.pet.image} alt="image of the pet" className="rounded w-25 h-25"/>
                    <Card.Text>Breed: {pet.pet.breed}</Card.Text>
                    <Card.Text>Status: {pet.pet.status}</Card.Text>
                    <Card.Text>Height: {pet.pet.height}CM</Card.Text>
                    <Card.Text>Weight: {pet.pet.weight}KG</Card.Text>
                    <Card.Text>Color: {pet.pet.color}</Card.Text>
                    <Card.Text>Bio: {pet.pet.bio}</Card.Text>
                    <Card.Text>{pet.pet.hypoallergenic && "hypoallergenic"}</Card.Text>
                    <Card.Text>dietary restrictions: {pet.pet.dietaryRestrictions}</Card.Text>
                </Card.Body>
            </Card>
            <Modal show={isModalOpen} onHide={closeModal} ref={ref}>
                <Link to={"/pet-page"}>ooooooooooo</Link>
                <Route path={"pet-page"}><PetPage props={pet}/></Route>
            </Modal>
        </>
    )
}
export default Pet