import { Modal } from "react-bootstrap"
import React, { useRef, useState } from "react"
import UserModal from "./userModal"

const User = ({user}) => {

    const ref = useRef();

    // get pets by user id
    const usersPets = []
    const allPets = JSON.parse(localStorage.getItem("allPets"))
    console.log(user._id);
    allPets.forEach(pet => {
        if (user._id === pet.ownerId) {
            usersPets.push(pet)
        }
    });

    const usersSavedPets = []
    allPets.forEach(pet => {
        if (user.savedPets.includes(pet._id)) {
            usersSavedPets.push(pet)
        }
    })

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => { setIsModalOpen(true) }
    const closeModal = () => { setIsModalOpen(false) }

    return (
        <>
            <h2 className="text-center mb-4" onClick={() => { openModal()}}>
                {user.firstName} {user.lastName}
                {user.admin ? <span> - Admin</span>
                :<span> - Owner</span>}
            </h2>
            <Modal show={isModalOpen} onHide={closeModal} ref={ref}>
                <UserModal user={user} pets={usersPets} savedPets={usersSavedPets}/>
            </Modal>
        </>
    )
}
export default User