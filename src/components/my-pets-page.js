  import React, { useContext, useEffect, useState} from "react"
import {UserContext} from "../context/context"
import { Card, Modal, } from "react-bootstrap";
import { getPetById, getPets } from "../lib/api";
import Pet from "./pet-card";

// add pet status
// See more button (this button takes you to a full detailed description of the pet)

function MyPetsPage() {

    const userContext = useContext(UserContext)
    // console.log(userContext);
    const [savedPets, setSavedPets] = useState([])
    const [usersPets, setUsersPets] = useState([])
    const [isModalOpen, setIsModalOpen] = useState("");

    useEffect(() => {
        getAllPets()
        // getSavedPets() 
    }, [])

    const closeModal = () => {
        setIsModalOpen(false)
        // getSavedPets()
        getAllPets()
    }

    const getAllPets = async () => {
        const petArray = []
        const pets = await getPets()
        pets.forEach(pet => {
        if (pet.ownerId === userContext.user._id) {petArray.push(pet)}
    })
    setUsersPets(petArray)
}

    // const getSavedPets = () => {
    //     const petArray = userContext.user.savedPets
    //     // setSavedPets(savedPets => savedPets = [])
    //     petArray.forEach( async (pet) => {
    //         const savedPet = await getPetById(pet)
    //         console.log(savedPet);
    //         // petArray.push(savedPet)
    //         // console.log(petArray);
    //         setSavedPets([...savedPets, savedPet])
    //     });
    //     // console.log(userContext.user.savedPets);
    //     // console.log(savedPets.length);

    // }

    return (
        <>
            <h1 className="text-center mb-4">My Pets</h1>
            <div key={Math.random()}>
                <Card className="align-items-center justify-content-center bg-transparent">
                    <Card.Body>
                        {usersPets.length ?
                            <div>
                                <h2>Owned/Fostered Pets</h2>
                                {usersPets.map(pet => {
                                    // console.log(usersPets);
                                    return (
                                        <div key={pet._id}>
                                            <div onClick={() => setIsModalOpen(pet._id)}>
                                                <Card.Title>Name: {pet.name}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Type: {pet.type}</Card.Subtitle>
                                                <Card.Img src={pet.image} alt="image of the pet" className="rounded w-25 h-25" />
                                            </div>
                                            <Modal show={isModalOpen === pet._id} onHide={closeModal} >
                                                <Pet pet={pet} />
                                            </Modal>
                                        </div>
                                    )
                                })}
                            </div>
                            :
                            <h3>You currently don't own any pets</h3>
                        }
                    </Card.Body>
                    <Card.Body>
                        {savedPets.length ?
                            <div>
                                <h2>Saved Pets</h2>
                                {/* {savedPets.map(pet => {
                                    console.log(pet); 
                                    return (
                                        <>
                                            <div onClick={() => setIsModalOpen(true)}>
                                                <Card.Title>Name: {pet.name}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Type: {pet.type}</Card.Subtitle>
                                                <Card.Img src={pet.image} alt="image of the pet" className="rounded w-25 h-25" />
                                            </div>
                                            <Modal show={isModalOpen} onHide={closeModal} >
                                                <Pet pet={pet} />
                                            </Modal>
                                        </>
                                        
                                    )
                                })} */}
                            </div>
                            :
                            <h3>You currently don't have any pets saved</h3>
                        }
                    </Card.Body>
                </Card>
            </div>
            
        </>
    )
}
export default MyPetsPage