import { Card } from "react-bootstrap";
import React from "react"


function UserModal({ user, pets, savedPets }) {

    return (
        <Card
            className="d-flex align-items-center justify-content-center bg-transparent">
            <Card.Body>
                <Card.Title>First Name: {user.firstName}</Card.Title>
                <Card.Subtitle className="mb-2">Last Name: {user.lastName}</Card.Subtitle>
                <Card.Text>Email: {user.email}</Card.Text>
                <Card.Text>Tel: {user.tel}</Card.Text>
                <Card.Text>Bio: {user.bio}</Card.Text>
                <Card.Title>
                    {pets.length ?
                        <>
                            User's Pets:
                            {pets.map(pet => {
                                return (
                                    <div key={pet._id}>
                                        <Card.Title>Name: {pet.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Type: {pet.type}</Card.Subtitle>
                                        <Card.Img src={pet.image} alt="image of the pet" className="rounded w-25 h-25" />
                                    </div>
                                )
                            })}
                        </>
                        :
                        <h3>User Owns No Pets</h3>
                    }
                </Card.Title>
                <Card.Title>
                    {savedPets.length ?
                        <>
                            User's saved Pets:
                            {savedPets.map(pet => {
                                return (<>
                                    <Card.Title>Name: {pet.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Type: {pet.type}</Card.Subtitle>
                                    <Card.Img src={pet.image} alt="image of the pet" className="rounded w-25 h-25" />
                                </>)
                            })}
                        </>
                        :
                        <h3>User Saved No Pets</h3>
                    }
                </Card.Title>
            </Card.Body>
        </Card>
    )
}
export default UserModal