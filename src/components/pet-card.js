import { Card, Button } from "react-bootstrap"
import React, { useContext, useEffect, useState } from "react"
import {UserContext} from "../context/context";
import { updatePetById, updateUserById } from "../lib/api"

function Pet({ pet }) {
    
    const userContext = useContext(UserContext)
    const [state, setState] = useState({})
    const [message, setMessage] = useState("")

    useEffect(() => {
        setState(pet)
    }, [pet])

    const handleReturn = async () => {
        const newPet = await updatePetById(`http://localhost:5000/api/pets/return/${state._id}`)
        if (typeof newPet == "string") {setMessage(newPet)}
        else {
            setState(newPet)
            setMessage("pet returned successfully")
        }
        console.log(newPet);
    }

    const handleFoster = async () => {
        const newPet = await updatePetById(`http://localhost:5000/api/pets/foster/${state._id}`, { user: userContext.user._id })
        if (typeof newPet == "string") {setMessage(newPet)}
        else {
            setState(newPet)
            setMessage("pet fostered successfully")
        }
        console.log(newPet);
    }

    const handleAdopt = async () => {
        const newPet = await updatePetById(`http://localhost:5000/api/pets/adopt/${state._id}`, { user: userContext.user._id })
        if (typeof newPet == "string") {setMessage(newPet)}
        else {
            setState(newPet)
            setMessage("pet adopted successfully")
        }
        console.log(newPet);
    }

    const handleSave = async () => {
        const newUser = await updateUserById(`http://localhost:5000/api/users/save/${userContext.user._id}`, { savedPets: [...userContext.user.savedPets, state._id] })
        if (typeof newUser == "string") { setMessage(newUser) }
        else {
            userContext.user = newUser
            setMessage("pet saved successfully")
            console.log(userContext);
        }
    }
    const handleUnSave = async () => {
        const index = userContext.user.savedPets.indexOf(state._id)
        userContext.user.savedPets.splice(index,1)
        const newUser = await updateUserById(`http://localhost:5000/api/users/save/${userContext.user._id}`, { savedPets: [...userContext.user.savedPets]})
        if (typeof newUser == "string") { setMessage(newUser) }
        else {
            userContext.user = newUser
            setMessage("pet unsaved successfully")
            console.log(userContext);
        }
    }

    return (
        <>
            <h2 className="text-center mb-4">{state.name} the {state.type} details:</h2>
            <Card
                className="d-flex align-items-center justify-content-center bg-transparent">
                <Card.Body>
                    <Card.Title>Name: {state.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Type: {state.type}</Card.Subtitle>
                    <Card.Img src={state.image} alt="image of the pet" alt={state.name} className="rounded w-25 h-25"/>
                    <Card.Text>Breed: {state.breed}</Card.Text>
                    <Card.Text>Status: {state.status}</Card.Text>
                    <Card.Text>Height: {state.height}CM</Card.Text>
                    <Card.Text>Weight: {state.weight}KG</Card.Text>
                    <Card.Text>Color: {state.color}</Card.Text>
                    <Card.Text>Bio: {state.bio}</Card.Text>
                    <Card.Text>{state.hypoallergenic && "hypoallergenic"}</Card.Text>
                    <Card.Text>dietary restrictions: {state.dietaryRestrictions}</Card.Text>
                </Card.Body>
                {userContext.user.login && <>
                    <h3>{message}</h3>
                    {state.status === "Available" ?
                    <>
                        <Button className="btn btn-primary" onClick={handleAdopt}>Adopt pet</Button>
                        <Button className="btn btn-warning" onClick={handleFoster}>Foster pet</Button>
                    </>
                        :    
                    null    
                    }
                    {state.status === "Fostered" ?
                    <>
                        <Button className="btn btn-primary" onClick={handleAdopt}>Adopt pet</Button>
                        <Button className="btn btn-danger" onClick={handleReturn}>Return pet</Button>
                    </>
                        :
                    null
                    }
                    {state.status === "Adopted" ?
                        <Button className="btn btn-danger" onClick={handleReturn}>Return pet</Button>
                        :
                    null
                    }
                    {userContext.user.savedPets.includes(state._id) ? 
                        <Button className="btn btn-dark" onClick={handleUnSave}>Unsave Pet</Button>
                        :
                        <Button className="btn btn-success" onClick={handleSave}>Save Pet</Button>
                    }
                </>}
            </Card>
        </>
    )
}
export default Pet