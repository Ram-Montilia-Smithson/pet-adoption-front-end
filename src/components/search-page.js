import React from "react";
import { Form, Button, Card} from "react-bootstrap";

export default function Search() {

    return (
        <>
            <Card className="d-flex align-items-center justify-content-center bg-transparent">
                <Card.Body>
            <h2 className="text-center mb-4">Search Page</h2>
            <Form>
                <label>search</label><br/>
                <Button>toggle between basic and advanced search</Button><br/>
                if basic:
                <Form.Group id="type">
                    <Form.Label>type of pet(dog, cat)</Form.Label>
                    <Form.Control type="text" />
                show ten results of pet cards base on type  
                </Form.Group>
                <br/><br/>
                if advanced:
                {/*Height, Weight*/}
                <Form.Group id="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group id="type">
                    <Form.Label>type of pet(dog, cat)</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group id="Adoption-Status">
                    <Form.Label>Adoption Status</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group id="height">
                    <Form.Label>Height</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
                <Form.Group id="weight">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control type="number" />
                        </Form.Group>
                        <Button>Search</Button>
            </Form>
            show ten results of pet cards
                    </Card.Body>
            </Card>
        </>
    );
}