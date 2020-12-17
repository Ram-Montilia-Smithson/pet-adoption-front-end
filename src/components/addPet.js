import { Button, Card, Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap"
import React from "react";


function AddPet() {

    return (
        <>
            <Card className="d-flex align-items-center justify-content-center bg-transparent">
                <Card.Title className="text-center mb-4">Add Pet</Card.Title>
                <Card.Body>
                    <Form>
                        <Form.Group id="Pet's-Name">
                            <Form.Label>Pet's Name</Form.Label>
                            <Form.Control type="text" required />
                        </Form.Group>
                        <Form.Group id="Pet's-Image">
                            <Form.Label>Pet's Image</Form.Label>
                            <Form.File required />
                        </Form.Group>
                        <Form.Group id="type">
                            <Form.Label>Pet's Type</Form.Label><br />
                            <ToggleButtonGroup type="radio" name="types">
                                <ToggleButton value={1}>cat</ToggleButton>
                                <ToggleButton value={2}>dog</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>
                        <Form.Group id="breed">
                            {/* consider type select */}
                            <Form.Label>Breed</Form.Label><br />
                            <Form.Control type="text" required />
                        </Form.Group>
                        <Form.Group id="adoption">
                            <Form.Label>Adoption Status</Form.Label><br />
                            <ToggleButtonGroup type="radio" name="adoption-status">
                                <ToggleButton value={1}>Owned</ToggleButton>
                                <ToggleButton value={2}>Fostered</ToggleButton>
                                <ToggleButton value={3}>None</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>
                        <Form.Group id="height">
                            <Form.Label>Height</Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>
                        <Form.Group id="weight">
                            <Form.Label>Weight</Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>
                        <Form.Group id="pet-color">
                            <Form.Label>Color</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group id="pet-bio">
                            <Form.Label>Pet Bio</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group id="hypoallergenic">
                            <Form.Label>Hypoallergenic</Form.Label><br />
                            <ToggleButtonGroup type="radio" name="yes-no">
                                <ToggleButton value={1}>Yes</ToggleButton>
                                <ToggleButton value={2}>No</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>
                        <Form.Group id="dietary-restrictions">
                            <Form.Label>Dietary Restrictions</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Button>Add Pet</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}
export default AddPet