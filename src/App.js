import './App.css';
import Admin from './components/admin';
import Homepage from './components/home-page';
import MyPetsPage from './components/my-pets-page';
import PetPage from './components/pet-page';
import ProfileSettings from './components/profile-settings';
import Search from './components/search-page';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { Navbar } from "react-bootstrap"
import AdminContext from "./context/context.js"
import React , {useContext} from "react"


function App() {

  const adminContext = useContext(AdminContext)

  return (
    <div className="App">
      <Router>
        <div id="h" className="mt-5">
          <Navbar
            fixed="top"
            className="bg-dark mx-5 rounded"
          >
            <Link to="/">Home</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/my-pets">My Pets</Link>
            <Link to="/pet">Pet Page</Link>
            <Link to="/search"> Search</Link>
            {adminContext.admin ?
              <Link to="/admin">Admin</Link> :
              null
            }
            {/* {console.log(adminContext.admin)} */}
          </Navbar>
          <Switch>
            {adminContext.admin ? <Route path="/admin"><Admin/></Route>
              : null}
            <Route path="/search"><Search/></Route>
            <Route path="/pet"><PetPage/></Route>
            <Route path="/my-pets"><MyPetsPage/></Route>
            <Route path="/profile"><ProfileSettings /></Route>
            <Route exact path="/"><Homepage /></Route>
          </Switch>
        </div>
      </Router>
      </div>
  );
}

export default App;
