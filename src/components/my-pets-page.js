// See more button(this button takes you to a full detailed description of the pet)


import { Button, Card } from "react-bootstrap";
 
function MyPetsPage() {
    return (
        <>
            <h2 className="text-center mb-4">My Pets Page</h2>
            if not own or foster any pets? display text saying that
            <Card className="d-flex align-items-center justify-content-center bg-transparent">
                <Card.Body>
                    Can toggle between pets and saved pets
                    <br/>
                    and both should be displaying for each pet:
                    <br/>
                    <Card.Img src="" alt="image of the pet"/>
                    <Card.Title>Pet's Name</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Pet's Status: foster / adopted</Card.Subtitle>
                    <Button variant="primary"> See More (should take you to PetPage)</Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default MyPetsPage