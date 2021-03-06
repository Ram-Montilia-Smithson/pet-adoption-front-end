import Login from "./login"
import Signup from "./signup"
import {UserContext} from "../context/context"
import React, { useContext, useState } from "react"
import { Modal } from "react-bootstrap"

// differentiate between home page as a logged in user and not
// add a search button


function Homepage() {
    
    const userContext = useContext(UserContext)
    console.log(userContext);
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
            {/* {userContext.login ? */}
                <div>
                <h1>Welcome to the pet adoption website!
                        {/* {userContext.firstName} {userContext.lastName} */}
                </h1>
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
                        <Signup/>
                    </Modal>
                    <Modal show={isLoginOpen} onHide={closeLoginModal}>
                        <Login/>
                    </Modal>
                </div>
            {/* } */}
        </div>
    );
}


export default Homepage