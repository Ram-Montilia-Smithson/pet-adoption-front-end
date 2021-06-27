import Login from "./login"
import Signup from "./signup"
import {UserContext} from "../context/context"
import React, { useContext, useState } from "react"
import { Modal } from "react-bootstrap"
import { getUserById } from "../lib/api"

function Homepage({ handleLogIn }) {
    
    const userContext = useContext(UserContext)

    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    
    const openLoginModal = () => {
        setIsLoginOpen(true)
    }

    const closeLoginModal = (response) => {
        setIsLoginOpen(false)
        if (response) handleLogIn()
    }

    const openSignupModal = () => {
        setIsSignupOpen(true)
    }

    const closeSignupModal = (response) => {
        setIsSignupOpen(false)
        if (response) handleLogIn()
    }

    return (
        <div>
            {userContext.user.login ?
                <div>
                    <h1>Welcome to the pet adoption website!  {userContext.user.firstName} {userContext.user.lastName}</h1>
                    <h2>what would you like to do today?</h2>
                </div>
                :
                <div>
                    <h1>Welcome to the pet adoption website!</h1>
                    <h2>Here, in our pet adoption website, we offer the very first step to get to know your new best friend</h2>
                    <div>
                        <p>if you already have an account</p>
                        <span>please <button onClick={openLoginModal}>Login</button> here</span>
                    </div>
                    <br/>
                    <div>
                        <p>if you are not currently registered</p>
                        <span>you are welcome to <button onClick={openSignupModal}>Signup</button> here</span>
                    </div>
                    <br />
                    <Modal show={isSignupOpen} onHide={closeSignupModal}>
                        <Signup closeSignupModal={closeSignupModal}/>
                    </Modal>
                    <Modal show={isLoginOpen} onHide={closeLoginModal}>
                        <Login closeLoginModal={closeLoginModal}/>
                    </Modal>
                </div>
            }
        </div>
    );
}


export default Homepage