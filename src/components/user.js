import { Modal } from "react-bootstrap"
import React, { useRef, useState } from "react"
import UserModal from "./userModal"

function User(user) {

    const ref = useRef();

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => { setIsModalOpen(true) }
    const closeModal = () => { setIsModalOpen(false) }

    return (
        <>
            <h2 className="text-center mb-4" onClick={() => { openModal()}}>
                {user.user.firstName} {user.user.lastName}
                {user.user.admin ? <span> - Admin</span>
                :<span> - Owner</span>}
            </h2>
            <Modal show={isModalOpen} onHide={closeModal} ref={ref}>
                <UserModal user={user.user} />
            </Modal>
        </>
    )
}
export default User