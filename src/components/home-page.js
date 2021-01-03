import Login from "./login"
import Signup from "./signup"
import UserContext from "../context/context"
import React, { useContext, useState, useEffect } from "react"
import { Modal } from "react-bootstrap"

function Homepage() {

    // useEffect(() => {
    //     //GET message from server using fetch api
    //     fetch('/api/home')
    //         .then(res => res.text())
    //         .then(res => this.setState({ message: res }));
    //     // return () => {cleanup}
    // }, [])

    const userContext = useContext(UserContext)
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
            {userContext.login ?
                <h1>Welcome to the pet adoption website {userContext.firstName} {userContext.lastName}</h1>
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
            {userContext.admin && <h1 className="text-center mb-4 mt-5">Admin</h1>}
        </div>
    );
}


export default Homepage