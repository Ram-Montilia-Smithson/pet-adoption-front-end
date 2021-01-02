import { Button, Card, Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap"
import React, { useState } from "react";
import { postPet } from "../lib/api";

// Add Pet API
// Route: ‘/pet’ [POST] (Protected to admin only)
// The add pet api is responsible for adding new pets
// Validate all the user input is valid
// Handle photo upload
// Store pet information in the database
// Fields:
// Type
// Name
// Adoption Status(Adopted, Fostered, Available)
// Picture(Picture location URL / Path)
// Height(number)
// Weight(Number)
// Color
// Bio
// Hypoallergenic(Boolean)
// Dietary restrictions
// Breed


function AddPet() {

    const [addPetData, setAddPetData] = useState({
        name: "",
        image: "",
        type: "",
        breed: "",
        height: 0,
        weight: 0,
        color: "",
        bio: "",
        hypoallergenic: false,
        diet: "",
        ownerId: '',
        status: ''
    });

    const handlePictureChange = (event) => {
        const file = event.target.files[0];
        setAddPetData({ ...addPetData, image: file });
    };

    const handleHypoChange = (event) => {
        if (event === 1) {setAddPetData({ ...addPetData, hypoallergenic: true });}
        else {setAddPetData({ ...addPetData, hypoallergenic: false });}
    };

    const handleTypeChange = (event) => {
        if (event === 1) {setAddPetData({ ...addPetData, type: "cat" });}
        else {setAddPetData({ ...addPetData, type: "dog" });}
    };

    const handleOnSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append('name', addPetData.name)
        formData.append('weight', addPetData.weight)
        formData.append('height', addPetData.height)
        formData.append('color', addPetData.color)
        formData.append('breed', addPetData.breed)
        formData.append('type', addPetData.type)
        formData.append('hypoallergenic', addPetData.hypoallergenic)
        formData.append('diet', addPetData.diet)
        formData.append('image', addPetData.breed)
        formData.append('bio', addPetData.bio)
        formData.append('status', addPetData.status)
        formData.append('ownerId', addPetData.ownerId)
        formData.append('image', addPetData.image)
        postPet(formData)
        setAddPetData({
            name: "", image: "", type: "", breed: "", height: 0, weight: 0, color: "",
            bio: "", hypoallergenic: false, diet: "", ownerId: '', status: ''
        })
    };

    return (
        <>
            <Card className="d-flex align-items-center justify-content-center bg-transparent">
                <Card.Title className="text-center mb-4">Add Pet</Card.Title>
                <Card.Body>
                    <Form
                        className="bg-light"
                        onSubmit={(event) => handleOnSubmit(event)}
                        action="addPet"
                        method="post"
                        encType="multipart/form-data"
                    >
                        <Form.Group id="pet's-Name">
                            <Form.Label>Pet's Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                onChange={(event) =>setAddPetData({ ...addPetData, name: event.target.value })}
                                value={addPetData.name}
                                required
                            />
                        </Form.Group>
                        <Form.Group id="pet's-image">
                            <Form.Label>Pet's Image</Form.Label>
                            <Form.File
                                type="file"
                                name="image"
                                onChange={(event) => handlePictureChange(event)}
                                required
                                // image needs resetting after submit
                            />
                        </Form.Group>
                        <Form.Group id="type">
                            <Form.Label>Pet's Type</Form.Label><br />
                            <ToggleButtonGroup
                                type="radio"
                                name="types"
                                onChange={(event) => handleTypeChange(event)}
                                value={addPetData.type}
                                required
                            >
                                <ToggleButton value={1}>cat</ToggleButton>
                                <ToggleButton value={2}>dog</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>
                        <Form.Group id="breed">
                            <Form.Label>Breed</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Breed"
                                onChange={(event) => setAddPetData({ ...addPetData, breed: event.target.value })}
                                value={addPetData.breed}
                                required
                            />
                        </Form.Group>
                        <Form.Group id="height">
                            <Form.Label>Height</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Height"
                                onChange={(event) => setAddPetData({ ...addPetData, height: event.target.value })}
                                value={addPetData.height}
                                required
                            />
                        </Form.Group>
                        <Form.Group id="weight">
                            <Form.Label>Weight</Form.Label>
                            <Form.Control    
                                type="number"
                                placeholder="weight"
                                onChange={(event) => setAddPetData({ ...addPetData, weight: event.target.value })}
                                value={addPetData.weight}
                                required
                            />
                        </Form.Group>
                        <Form.Group id="pet-color">
                            <Form.Label>Color</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Color"
                                onChange={(event) => setAddPetData({ ...addPetData, color: event.target.value })}
                                value={addPetData.color}
                                required
                            />
                        </Form.Group>
                        <Form.Group id="pet-bio">
                            <Form.Label>Pet Bio</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Bio"
                                onChange={(event) => setAddPetData({ ...addPetData, bio: event.target.value })}
                                value={addPetData.bio}
                                required
                            />
                        </Form.Group>
                        <Form.Group id="hypoallergenic">
                            <Form.Label>Hypoallergenic</Form.Label><br />
                            <ToggleButtonGroup
                                type="radio"
                                name="hypoallergenic"
                                onChange={(event) => handleHypoChange(event)}
                                value={addPetData.hypoallergenic}
                                required
                            >
                                <ToggleButton value={1}>Yes</ToggleButton>
                                <ToggleButton value={2}>No</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>
                        <Form.Group id="dietary-restrictions">
                            <Form.Label>Dietary Restrictions</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Dietary Restrictions"
                                onChange={(event) => setAddPetData({ ...addPetData, diet: event.target.value })}
                                value={addPetData.diet}
                            />
                        </Form.Group>
                        <Button type="submit">Add Pet</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}
export default AddPet