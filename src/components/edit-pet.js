import { Button, Card, Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap"
import React, { useState } from "react"
import { updatePetById } from "../lib/api";

export default function EditPet({ pet, closeModal }) {

    const [newPicture, setNewPicture] = useState(false)
    const [newPet, setNewPet] = useState(pet);
    const [editPetData, setEditPetData] = useState({
        name: "",
        image: "",
        type: "",
        breed: "",
        height: 0,
        weight: 0,
        color: "",
        bio: "",
        hypoallergenic: false,
        dietaryRestrictions: ""
    });

    const handlePictureChange = (event) => {
        const file = event.target.files[0];
        setEditPetData({ ...editPetData, image: file });
        setNewPicture(true)
    };

    const handleOnSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append('status', newPet.status)
        formData.append('ownerId', newPet.ownerId)
        if (editPetData.name) { formData.append('name', editPetData.name) }
        if (!editPetData.name) { formData.append('name', newPet.name) }
        if (editPetData.weight) { formData.append('weight', editPetData.weight) }
        if (!editPetData.weight) { formData.append('weight', newPet.weight) }
        if (editPetData.height) { formData.append('height', editPetData.height) }
        if (!editPetData.height) { formData.append('height', newPet.height) }
        if (editPetData.color) { formData.append('color', editPetData.color) }
        if (!editPetData.color) { formData.append('color', newPet.color) }
        if (editPetData.breed) { formData.append('breed', editPetData.breed) }
        if (!editPetData.breed) { formData.append('breed', newPet.breed) }
        if (editPetData.type) { formData.append('type', editPetData.type) }
        if (!editPetData.type) { formData.append('type', newPet.type) }
        if (editPetData.hypoallergenic) { formData.append('hypoallergenic', editPetData.hypoallergenic) }
        if (!editPetData.hypoallergenic) { formData.append('hypoallergenic', newPet.hypoallergenic) }
        if (editPetData.dietaryRestrictions) { formData.append('dietaryRestrictions', editPetData.dietaryRestrictions) }
        if (!editPetData.dietaryRestrictions) { formData.append('dietaryRestrictions', newPet.dietaryRestrictions) }
        if (editPetData.bio) { formData.append('bio', editPetData.bio) }
        if (!editPetData.bio) { formData.append('bio', newPet.bio) }
        if (newPicture) {formData.append('image', editPetData.image)}
        if (!newPicture) { formData.append('image', newPet.image) }
        const EditedPet = await updatePetById(`http://localhost:5000/api/pets/${newPet._id}`, formData)
        setNewPet(EditedPet)
        setNewPicture(false)
        setEditPetData({
            name: "", image: "", type: "", breed: "", height: 0, weight: 0, color: "",
            bio: "", hypoallergenic: false, dietaryRestrictions: ""
        })
        // set a loader to run until the response comes
        closeModal()
    };

        return (
            <Card className="d-flex align-items-center justify-content-center bg-transparent">
                <Card.Title className="text-center mb-4">Edit Pet</Card.Title>
                <Card.Body>
                    <Form
                        className="bg-light"
                        onSubmit={(event) => handleOnSubmit(event)}
                        action="updatePet"
                        method="put"
                        encType="multipart/form-data"
                    >
                        <Form.Group id="pet's-Name">
                            <Form.Label>New Pet's Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={newPet.name}
                                onChange={(event) => setEditPetData({ ...editPetData, name: event.target.value })}
                                value={editPetData.name}
                            />
                        </Form.Group>
                        <Form.Group id="pet's-image">
                            <Form.Label>New Pet's Image</Form.Label>
                            <br />
                            <Card.Img src={newPet.image} alt={newPet.name} className="rounded w-25 h-25" />
                            <Form.File
                                type="image/jpeg"
                                name="image"
                                onChange={(event) => handlePictureChange(event)}
                            />
                        </Form.Group>
                        <Form.Group id="type">
                            <Form.Label>New Pet's Type</Form.Label><br />
                            <ToggleButtonGroup
                                type="radio"
                                name="types"
                                onChange={(event) => setEditPetData({ ...editPetData, type: event })}
                                value={editPetData.type}
                            >
                                <ToggleButton value={"cat"}>cat</ToggleButton>
                                <ToggleButton value={"dog"}>dog</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>
                        <Form.Group id="breed">
                            <Form.Label>New Breed</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={newPet.breed}
                                onChange={(event) => setEditPetData({ ...editPetData, breed: event.target.value })}
                                value={editPetData.breed}
                            />
                        </Form.Group>
                        <Form.Group id="height">
                            <Form.Label>New Height</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder={newPet.height}
                                onChange={(event) => setEditPetData({ ...editPetData, height: event.target.value })}
                                value={editPetData.height}
                            />
                        </Form.Group>
                        <Form.Group id="weight">
                            <Form.Label>New Weight</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder={newPet.weight}
                                onChange={(event) => setEditPetData({ ...editPetData, weight: event.target.value })}
                                value={editPetData.weight}
                            />
                        </Form.Group>
                        <Form.Group id="pet-color">
                            <Form.Label>New Color</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={newPet.color}
                                onChange={(event) => setEditPetData({ ...editPetData, color: event.target.value })}
                                value={editPetData.color}
                            />
                        </Form.Group>
                        <Form.Group id="pet-bio">
                            <Form.Label>New Pet Bio</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder={newPet.Bio}
                                onChange={(event) => setEditPetData({ ...editPetData, bio: event.target.value })}
                                value={editPetData.bio}
                            />
                        </Form.Group>
                        <Form.Group id="hypoallergenic">
                            <Form.Label>Hypoallergenic</Form.Label><br />
                            <ToggleButtonGroup
                                type="radio"
                                name="hypoallergenic"
                                onChange={(event) => setEditPetData({ ...editPetData, hypoallergenic: event })}
                                value={editPetData.hypoallergenic}
                            >
                                <ToggleButton value={"yes"}>Yes</ToggleButton>
                                <ToggleButton value={"no"}>No</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>
                        <Form.Group id="dietary-restrictions">
                            <Form.Label>New Dietary Restrictions</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={newPet.dietaryRestrictions}
                                onChange={(event) => setEditPetData({ ...editPetData, dietaryRestrictions: event.target.value })}
                                value={editPetData.dietaryRestrictions}
                            />
                        </Form.Group>
                        <Button type="submit">Edit Pet</Button> 
                    </Form>
                </Card.Body>
            </Card>
        )
}
    
