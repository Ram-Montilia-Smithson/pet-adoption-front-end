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
import React, { useContext, useEffect} from "react"
import PetPage from './components/pet-page';
import { getPetById, getPets, getUserById, getUsers, deletePetById, deleteUserById, updateUserById, updatePetById } from "./lib/api";


function App() {

  let mongoUserContext = UserContext

  useEffect(() => {
    // works
    // getPetById("5fec75fc3720284b9c287a81").then((response) => {
    //   console.log(response, "getPetById");
    // })
    // works
    // getUserById("5fec971b1610890b741e797a").then((response) => {
    //   console.log(response.data, "getUserById");
    //   mongoUserContext = response.data
    // })
    // deletePetById("5fec9d661610890b741e797d").then((response) => {
    //   console.log(response, "deletePetById");
    // })
    // deleteUserById("5feccadc3e80613a285c288d").then((response) => {
    //   console.log(response, "deleteUserById");
    // })
    // return () => {cleanup}
  }, [])

  const userContext = useContext(mongoUserContext)

  return (
    <div className="App">
      <Router>
        <div id="h" className="mt-5">
          <Navbar
            fixed="top"
            className="bg-dark mx-5 rounded"
          >
            <Link to="/">Home</Link>
            {userContext.login ? <>
              <Link to="/Profile">Profile</Link>
              <Link to="/my-pets">My Pets</Link>
              <Link to="/pet-page">Pet Page</Link></> :
              null
            }
            <Link to="/search"> Search</Link>
            {userContext.admin ?
              <>
                <Link to="/admin/add-pet">Add Pet</Link>
                <Link to="/admin/dashboard">Dashboard</Link>
              </>
              : null
            }
            {/* {console.log(adminContext.admin)} */}
          </Navbar>
          <Switch>
            {userContext.admin ?
              <>
                <Route path="/admin/add-pet"><AddPet /></Route>
                <Route path="/admin/dashboard"><Dashboard /></Route>
                <Route path="/search"><Search /></Route>
                <Route path="/my-pets"><MyPetsPage /></Route>
                <Route path="/pet-page"><PetPage/></Route>
                <Route path="/profile"><ProfileSettings /></Route>
                <Route exact path="/"><Homepage /></Route>
              </> :
              <>
                <Route path="/search"><Search /></Route>
                <Route path="/my-pets"><MyPetsPage /></Route>
                <Route path="/pet-page"><PetPage /></Route>
                <Route path="/profile"><ProfileSettings /></Route>
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
