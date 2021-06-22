import { Modal } from "react-bootstrap"
import React, { useEffect, useRef, useState } from "react"
import UserModal from "./userModal"
import { getPetById, getPets } from "../lib/api"

const User = ({ user }) => {
    
    const [savedPets, setSavedPets] = useState([])
    const [usersPets, setUsersPets] = useState([])

    const ref = useRef();

    useEffect(() => {
        getAllPets()
        getSavedPets()
    }, [user])

    const getAllPets = async () => {
        const petArray = []
        const pets = await getPets()
        pets.forEach(pet => {
            if (pet.ownerId === user._id) { petArray.push(pet) }
        })
        setUsersPets(petArray)
    }

    const getSavedPets = () => {
        const petIDArray = user.savedPets
        const petArray = []
        setSavedPets(savedPets => [])
        petIDArray.forEach(async (pet) => {
            const savedPet = await getPetById(pet)
            petArray.push(savedPet)
            setSavedPets(savedPets => [...savedPets, savedPet])
        })
    }

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => { setIsModalOpen(true) }
    const closeModal = () => { setIsModalOpen(false) }

    return (
        <>
            <h2 className="text-center mb-4" onClick={() => { openModal()}}>
                {user.firstName} {user.lastName}
                {user.admin ?
                    <span> - Admin</span>
                    :
                    <span> - Owner</span>
                }
            </h2>
            <Modal show={isModalOpen} onHide={closeModal} ref={ref}>
                <UserModal user={user} pets={usersPets} savedPets={savedPets}/>
            </Modal>
        </>
    )
}
export default User