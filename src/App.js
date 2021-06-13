import AddPet from "./components/addPet"
import Dashboard from "./components/dashboard";
import Homepage from './components/home-page';
import MyPetsPage from './components/my-pets-page';
import ProfileSettings from './components/profile-settings';
import Search from './components/search-page';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom"
import { Navbar } from "react-bootstrap"
import {UserContext} from "./context/context"
import React, { useContext, useEffect, useState } from "react"
import EditPet from './components/edit-pet';
import { getPets, getUsers } from "./lib/api"
// import { createBrowserHistory } from 'history';


function App() {

  const userContext = useContext(UserContext)

  const [state, setState] = useState(null)
  
  const handleLogOut = () => {
    userContext.user = {}
    setState("logged out")
  }

  const handleLogIn = () => {
    setState("logged in")
  }

  return (
    <div className="text-center">
      <Router>
        <div id="h" className="mt-5">
          <Navbar
            fixed="top"
            className="bg-dark mx-5 rounded d-flex justify-content-around"
          >
            <Link to="/"> Home </Link>
            <>|</>
            <Link to="/search"> Search </Link>
            {userContext.user.login ?
            <>
              <>|</>
              <Link to="/Profile"> Profile </Link>
              <>|</>
              <Link to="/my-pets"> My Pets </Link>
              <>|</>
                <a href={window.location.origin} className="text-danger" onClick={() => handleLogOut()}>LogOut</a>
                <span className="text-white">{userContext.user.firstName}</span>
            </>
            : null}
            {userContext.user.admin ?
              <>
                <span className="text-white"> Admin </span>
                <>|</>
                <Link to="/admin/add-pet">Add Pet</Link>
                <>|</>
                <Link to="/admin/dashboard">Dashboard</Link>
                <>|</>
                {/* <Link to="/edit-pet/:id"> Edit Pet </Link> */}
              </>
            : null}
          </Navbar>
          <Switch>
            {userContext.user.admin ?
              <>
                <Route path="/admin/add-pet"><AddPet /></Route>
                <Route path="/admin/dashboard"><Dashboard /></Route>
                <Route path="/search"><Search /></Route>
                <Route path="/my-pets"><MyPetsPage /></Route>
                {/* <Route path="/edit-pet/:id"><EditPet/></Route>  */}
                <Route path="/profile"><ProfileSettings /></Route>
                <Route exact path="/"><Homepage handleLogOut={handleLogOut} handleLogIn={handleLogIn}/></Route>
              </>
              :
              <>
                <Route path="/search"><Search /></Route>
                <Route path="/my-pets"><MyPetsPage /></Route>
                <Route path="/profile"><ProfileSettings /></Route>
                <Route exact path="/"><Homepage handleLogOut={handleLogOut} handleLogIn={handleLogIn}/></Route>
              </>
            }
          </Switch>
        </div>
      </Router>
      </div>
  );
}

export default App;
