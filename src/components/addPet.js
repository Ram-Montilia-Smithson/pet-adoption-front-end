import { Button, Card, Form, Modal, ToggleButton, ToggleButtonGroup } from "react-bootstrap"
import React, { useRef, useState } from "react";
import { postPet } from "../lib/api";
// import { NewPet } from "../context/context";
import Pet from "./pet";

function AddPet() {

    // const newPet = useContext(NewPet)

    const ref = useRef();

    const [newPet, setNewPet] = useState({});

    const [isModalOpen, setIsModalOpen] = useState(false);
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
        dietaryRestrictions: ""
    });

    const handlePictureChange = (event) => {
        const file = event.target.files[0];
        setAddPetData({ ...addPetData, image: file });
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
        formData.append('dietaryRestrictions', addPetData.dietaryRestrictions)
        formData.append('image', addPetData.breed)
        formData.append('bio', addPetData.bio)
        formData.append('status', 'Available')
        formData.append('ownerId', 0)
        formData.append('image', addPetData.image)
        setAddPetData({
            name: "", image: "", type: "", breed: "", height: 0, weight: 0, color: "",
            bio: "", hypoallergenic: false, dietaryRestrictions: ""
        })
        postPet(formData)
            .then(() => { setNewPet(JSON.parse(localStorage.getItem('newPet'))) })
            .then(() => { setIsModalOpen(true)})
        
        // ref.current.value = ""
    };

    const closeModal = () => {
        setIsModalOpen(false)
    }

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
                                onChange={(event) => setAddPetData({ ...addPetData, name: event.target.value })}
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
                                ref={ref}
                                // image needs resetting after submit
                            />
                        </Form.Group>
                        <Form.Group id="type">
                            <Form.Label>Pet's Type</Form.Label><br />
                            <ToggleButtonGroup
                                type="radio"
                                name="types"
                                onChange={(event) => setAddPetData({...addPetData, type: event})}
                                value={addPetData.type}
                                required
                            >
                                <ToggleButton value={"cat"}>cat</ToggleButton>
                                <ToggleButton value={"dog"}>dog</ToggleButton>
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
                                onChange={(event) => setAddPetData({ ...addPetData, hypoallergenic: event })}
                                value={addPetData.hypoallergenic}
                                required
                            >
                                <ToggleButton value={"yes"}>Yes</ToggleButton>
                                <ToggleButton value={"no"}>No</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>
                        <Form.Group id="dietary-restrictions">
                            <Form.Label>Dietary Restrictions</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Dietary Restrictions"
                                onChange={(event) => setAddPetData({ ...addPetData, dietaryRestrictions: event.target.value })}
                                value={addPetData.dietaryRestrictions}
                            />
                        </Form.Group>
                        <Button type="submit">Add Pet</Button>
                    </Form>
                </Card.Body>
            </Card>
            <Modal show={isModalOpen} onHide={closeModal}>
                <Pet pet={newPet} />
            </Modal>
        </>
    )
}
export default AddPet