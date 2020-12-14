import { Button, Card, ListGroup } from "react-bootstrap"

function PetPage() {
    return (
        <>
            <h1 className="text-center mb-4">Pet Page</h1>
            <h2 className="text-center mb-4">pet Details</h2>
            <Card className="d-flex align-items-center justify-content-center bg-transparent">
                <Card.Body>
                    <Card.Title>Pet's Name</Card.Title>
                    <Card.Img src="" alt="image of the pet" />
                    <Card.Subtitle className="mb-2 text-muted">Type(dog, cat)</Card.Subtitle>
                    <Card.Text> breed of animal(Poodle, Siamese)...</Card.Text>
                    <Card.Text>Adoption Status</Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item>height:</ListGroup.Item>
                        <ListGroup.Item>weight:</ListGroup.Item>
                        <ListGroup.Item>color:</ListGroup.Item>
                    </ListGroup>
                    <Card.Text>Pet's Bio</Card.Text>
                    <Card.Text>Hypoallergenic(yes / no)</Card.Text>
                    <Card.Text>dietary restrictions</Card.Text>
                    if the user is the owner:<br/>
                    <Button variant="danger">return the pet</Button><br/>
                    if the user is fostering the pet:<br/>
                    <Button variant="info">adopt the pet</Button><br/>
                    if the user is neither:<br/>
                    <Button variant="primary">foster the pet</Button><br/>
                    <Button variant="primary">adopt the pet</Button><br/>
                    should also include:<br/>
                    <Button>save for later(Or unsave if already saved)</Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default PetPage