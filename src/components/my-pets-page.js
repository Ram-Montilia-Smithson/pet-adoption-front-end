  import React, { useContext} from "react"
import {UserContext} from "../context/context"
import { Card, } from "react-bootstrap";

// add pet status
// See more button (this button takes you to a full detailed description of the pet)

function MyPetsPage() {

    const userContext = useContext(UserContext)

    const usersPets = []
    // const allPets = JSON.parse(localStorage.getItem("allPets"))
    const allPets = [1,2,3]
    allPets.forEach(pet => {
        if (userContext._id === pet.ownerId) {
            usersPets.push(pet)
        }
    });

    const usersSavedPets = []
    // allPets.forEach(pet => {
    //     if (userContext.savedPets.includes(pet._id)) {
    //         usersSavedPets.push(pet)
    //     }
    //     console.log(usersPets)
    //     console.log(allPets);
    // })

    return (
        <>
            <h1 className="text-center mb-4">My Pets</h1>
                <div key={Math.random()}>
                    <Card className="align-items-center justify-content-center bg-transparent">
                    <Card.Body>
                        {usersPets.length ?
                            <Card.Text>User's Pets:
                            {usersPets.map(pet => {
                                return (<>
                                    <Card.Title>Name: {pet.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Type: {pet.type}</Card.Subtitle>
                                    <Card.Img src={pet.image} alt="image of the pet" className="rounded w-25 h-25" />
                                </>)
                            })}
                            </Card.Text>
                            :
                            <h2>You currently don't own any Pets</h2>
                        }
                        {usersSavedPets.length ?
                            <Card.Text>User's Saved Pets:
                            {usersSavedPets.map(pet => {
                                return (<>
                                    <Card.Title>Name: {pet.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Type: {pet.type}</Card.Subtitle>
                                    <Card.Img src={pet.image} alt="image of the pet" className="rounded w-25 h-25" />
                                </>)
                            })}
                            </Card.Text>
                            :
                            <h2>You currently don't have any pets saved</h2>
                        }
                        </Card.Body>
                    </Card>
                </div>
            
        </>
    )
}
export default MyPetsPage