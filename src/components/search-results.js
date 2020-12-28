import React from "react"
// import UserContext from "../context/context"
import { Button, Card, } from "react-bootstrap";
// import PetPage from "./pet-page";

function SearchResults(props) {

    // const userContext = useContext(UserContext)

    return (
        <>
            <h2 className="text-center mb-4">Search Results</h2>
            {/* {props.pets.map(pet => {
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
            })} */}
        </>
    )
}
export default SearchResults