import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import { Navbar } from "react-bootstrap"
import React, {useEffect} from "react"
import Pets from "./allPets"
import Users from "./allUsers"

// get the users and the pets from context

function Dashboard() {

    return (
        <>
            <h1 className="text-center mb-4 mt-5">Dashboard</h1>
            <Router>
                <Navbar className="bg-dark mx-5 rounded">
                    <Link to="/admin/dashboard/users">Users</Link>
                    <Link to="/admin/dashboard/pets">Pets</Link>
                </Navbar>
                <Switch>
                    <Route path="/admin/dashboard/users">
                        <Users/>
                        <p>List of all the users in the database(pet owners and administrators)
                        Clicking on a user should display all the pets that the user owns along with all of
                        their profile details so the administrators can contact the user.</p>
                    </Route>
                    <Route path="/admin/dashboard/pets">
                        <p>List of all pets and ability to go to the pet page and edit. (The edit should be just like adding a pet but with the details already displayed there)</p>
                        <Pets/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
export default Dashboard