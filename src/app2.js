import './App.css';
import AddPet from "./components/addPet"
import Dashboard from "./components/dashboard";
import Homepage from './components/home-page';
import MyPetsPage from './components/my-pets-page';
import ProfileSettings from './components/profile-settings';
import Search from './components/search-page';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { Navbar } from "react-bootstrap"
import UserContext from "./context/context"
import React, { useContext, useEffect } from "react"
import PetPage from './components/pet-page';
import { getPetById, getPets, getUserById, getUsers, deletePetById, deleteUserById, updateUserById, updatePetById } from "./lib/api";


function App() {

    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined,
    });

    useEffect(() => {
        // works
        // getPetById("5fec75fc3720284b9c287a81").then((response) => {
        //   console.log(response, "getPetById");
        // })
        // })
        // return () => {cleanup}
    }, [])

    return (
        <div className="App">
            <Router>
                <div id="h" className="mt-5">
                    <Navbar
                        fixed="top"
                        className="bg-dark mx-5 rounded"
                    >
                    {userData.user ?
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/Profile">Profile</Link>
                        <Link to="/my-pets">My Pets</Link>
                        <Link to="/pet-page">Pet Page</Link>
                        <Link to="/search"> Search</Link>
                    </>
                    :
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/search"> Search</Link>
                    </>
                    }
                    </Navbar>
                    <Switch>
                    {userData.user ?
                    <>
                        <Route path="/search"><Search /></Route>
                        <Route path="/profile"><ProfileSettings /></Route>
                        <Route path="/my-pets"><MyPetsPage /></Route>
                        <Route path="/pet-page"><PetPage /></Route>
                        <Route exact path="/"><Homepage /></Route>
                    </>
                    :
                    <>
                        <Route path="/search"><Search /></Route>
                        <Route exact path="/"><Homepage /></Route>            
                    </>        
                    }
                    </Switch>
                </div>
            </Router>

        </div>
    );
}

export default App;



{/* <Link to="/admin/add-pet">Add Pet</Link> */}
                        // <Link to="/admin/dashboard">Dashboard</Link>
                        // <Route path="/admin/add-pet"><AddPet /></Route>
                        // <Route path="/admin/dashboard"><Dashboard /></Route>