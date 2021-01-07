// See more button(this button takes you to a full detailed description of the pet)
// Can toggle between pets and saved pets    

import React, { useContext} from "react"
import UserContext from "../context/context"
import { Button, Card, } from "react-bootstrap";
// import PetPage from "./pet-page";
{/* {pet.status === "owned" && <><Button variant="danger">return the pet</Button></>}
                    {pet.status === "fostered" && <><Button variant="info">adopt the pet</Button></>}
                    {!pet.status && <><Button variant="primary">foster the pet</Button>
                        <Button variant="primary">adopt the pet</Button></>}
                    <br /><Button>save for later</Button> */}
function MyPetsPage() {

    const userContext = useContext(UserContext)

    if (userContext.pets.length===0) {return <h2>you currently don't own any pets</h2>}
    return (
        <>
            <h2 className="text-center mb-4">My Pets</h2>
            {userContext.pets.map(pet => {
                return (
                    <div key={Math.random()}>
                        <Card className="align-items-center justify-content-center bg-transparent">
                            <Card.Body>
                                <Card.Img src="../images" alt="image of the pet" />
                                <Card.Title>{pet.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{pet.status}</Card.Subtitle>
                                <Button variant="primary">See More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </>
    )
}
export default MyPetsPage