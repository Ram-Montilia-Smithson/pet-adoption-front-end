import Login from "./login"
import Signup from "./signup"
import LoginContext from "../context/context"
import { AdminContext } from "../context/context.js"
import React, { useContext, useState } from "react"
import { Modal } from "react-bootstrap"

function Homepage() {

    const adminContext = useContext(AdminContext)
    const loginContext = useContext(LoginContext)
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);

    const openLoginModal = () => {
        setIsLoginOpen(true)
    }

    const closeLoginModal = () => {
        setIsLoginOpen(false)
    }

    const openSignupModal = () => {
        setIsSignupOpen(true)
    }

    const closeSignupModal = () => {
        setIsSignupOpen(false)
    }

    return (
        <div>
            {loginContext.login ?
                <h1>Welcome to the site First Name Last Name</h1>
                :
                <div>
                    <h1>Welcome to the site!</h1>
                    <p>description to the service provided</p>
                    <button
                        onClick={openLoginModal}
                    >
                        Login
                    </button>
                    <button
                        onClick={openSignupModal}
                    >
                        Signup
                    </button>
                    <br />
                    <Modal
                        show={isSignupOpen}
                        onHide={closeSignupModal}
                    >
                        <Signup />
                    </Modal>
                    <Modal
                        show={isLoginOpen}
                        onHide={closeLoginModal}
                    >
                        <Login />
                    </Modal>
                </div>
            }
            {adminContext.admin && <h1 className="text-center mb-4 mt-5">Admin</h1>}
        </div>
    );
}


export default Homepage