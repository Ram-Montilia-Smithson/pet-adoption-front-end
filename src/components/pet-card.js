import { Card, Button } from "react-bootstrap"
import React, { useContext } from "react"
import UserContext from "../context/context";
import { updatePetById, updateUserById } from "../lib/api"

// save for later

function Pet(pet) {

    const userContext = useContext(UserContext)

    const handleReturn = () => {
        updatePetById(`http://localhost:5000/api/pets/return/${pet.pet._id}`, { pet: pet.pet._id })
    }

    const handleFoster = () => {
        updatePetById(`http://localhost:5000/api/pets/foster/${pet.pet._id}`,{ pet: pet.pet._id, user: userContext._id, updateType: "Foster" })
    }

    const handleAdopt = () => {
        updatePetById(`http://localhost:5000/api/pets/adopt/${pet.pet._id}`,{ pet: pet.pet._id, user: userContext._id })
    }

    const handleSave = () => {
        updateUserById(`http://localhost:5000/api/users/save/${userContext._id}`,{ savedPets: [...userContext.savedPets, pet.pet._id] })
    }
    const handleUnSave = () => {
        const index = userContext.savedPets.indexOf(pet.pet._id)
        userContext.savedPets.splice(index,1)
        updateUserById(`http://localhost:5000/api/users/save/${userContext._id}`,{ savedPets: [...userContext.savedPets]})
    }

    return (
        <>
            <h2 className="text-center mb-4">{pet.pet.name} the {pet.pet.type} details:</h2>
            <Card
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
                {userContext.login && <>
                    {pet.pet.status === "Available" ?
                    <>
                        <Button className="btn btn-primary" onClick={handleAdopt}>Adopt pet</Button>
                        <Button className="btn btn-warning" onClick={handleFoster}>Foster pet</Button>
                    </>
                        :    
                    null    
                    }
                    {pet.pet.status === "Fostered" ?
                    <>
                        <Button className="btn btn-primary" onClick={handleAdopt}>Adopt pet</Button>
                        <Button className="btn btn-danger" onClick={handleReturn}>Return pet</Button>
                    </>
                        :
                    null
                    }
                    {pet.pet.status === "Adopted" ?
                        <Button className="btn btn-danger" onClick={handleReturn}>Return pet</Button>
                        :
                    null
                    }
                    {userContext.savedPets.includes(pet.pet._id) ? 
                        <Button className="btn btn-dark" onClick={handleUnSave}>Unsave Pet</Button>
                        :
                        <Button className="btn btn-success" onClick={handleSave}>Save Pet</Button>
                    }
                    {/* {userContext.admin && <Card.Link href={`/edit-pet/${pet.pet._id}`}>Edit Pet</Card.Link>} */}
                </>}
            </Card>
        </>
    )
}
export default Pet