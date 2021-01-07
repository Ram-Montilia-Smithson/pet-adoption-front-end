import './App.css';
import AddPet from "./components/addPet"
import Dashboard from "./components/dashboard";
import Homepage from './components/home-page';
import MyPetsPage from './components/my-pets-page';
import ProfileSettings from './components/profile-settings';
import Search from './components/search-page';
import { BrowserRouter as Router, Route, Switch, Link, } from "react-router-dom"
import { Navbar } from "react-bootstrap"
import UserContext from "./context/context"
import React, { useContext, useEffect } from "react"
import PetPage from './components/pet';
import { getPets, getUsers } from './lib/api';
const { user } = require("./data.json")

function App() {

  console.log(localStorage);

  const userContext = useContext(UserContext)
  
  const handleLogOut = () => {localStorage.setItem('user', JSON.stringify(user))}

  return (
    <div className="App">
      <Router>
        <div id="h" className="mt-5">
          <Navbar
            fixed="top"
            className="bg-dark mx-5 rounded"
          >
            <Link to="/"> Home </Link>
            <>|</>
            <Link to="/search"> Search </Link>
            {userContext.login ?
            <>
              <>|</>
              <Link to="/Profile"> Profile </Link>
              <>|</>
              {/* fix pet page and my pets */}
              {/* <Link to="/my-pets"> My Pets </Link> */}
              <>|</>
              {/* <Link to="/pet-page"> Pet Page </Link> */}
              <>|</>
                <a href={window.location.origin} className="text-white" onClick={() => handleLogOut()}>logOut</a>
            </>
            : null}
            {userContext.admin ?
              <>
                <>|</>
                <Link to="/admin/add-pet">Add Pet</Link>
                <>|</>
                <Link to="/admin/dashboard">Dashboard</Link>
                <>|</>
                <span className="text-white">Admin</span>
              </>
            : null}
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
              </>
              :
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
