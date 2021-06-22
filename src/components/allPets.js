import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap";
import EditPet from "./edit-pet";
import Pet from "./pet-card"

function Pets({ pets, getAllPets }) {
    
    const [isModalOpen, setIsModalOpen] = useState("");

    const closeModal = () => {
        setIsModalOpen("")
        getAllPets()
    }

    return (
        <>
            <h1 className="text-center mb-4 mt-5">All Pets In Adoption Center</h1>
            {pets.map(pet => {
                return (
                    <div key={pet._id}>
                        <Pet pet={pet}/>
                        <Button className="btn btn-info" onClick={() => setIsModalOpen(pet._id)}>Edit Pet</Button>
                        <Modal show={isModalOpen === pet._id}>
                            <EditPet pet={pet} closeModal={closeModal} />
                        </Modal>
                    </div>
                )
            })}
        </>
    )
}
export default Pets