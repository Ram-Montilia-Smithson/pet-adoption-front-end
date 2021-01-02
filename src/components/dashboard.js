import {
    BrowserRouter as Router,
    Route, Switch,
    Link
} from "react-router-dom"
import { Navbar } from "react-bootstrap"
import React, {useEffect} from "react"
import Pets from "./allPets"
import Users from "./allUsers"
import { getPets, getUsers } from "../lib/api"

// Get Pets API
// Route: ‘/pet’ [GET] 
// The get pets API is responsible for retrieving pets that match the criteria given.
// Can receive query parameters to search the database
// Retrieve results to match query.If no parameters are passed it should return all the results.
// Should only return the fields necessary
// Search Fields:
// Adoption Status
// Type
// Height
// Weight
// Name

// Get Users API
// Route ‘/user’ [GET] (protected to admin)
// The GET users API returns all users in the DB.
// The API should only return the information required

function Dashboard() {

    useEffect(() => {
        getUsers().then((response) => {
            console.log(response, "getUser");
        })
        getPets().then((response) => {
            console.log(response, "getPets");
        })
        // updateUserById("5fedfc2b5c7cb144f8b36d6b").then((response) => {
        //     console.log(response, "updateUserById");
        // })
        // updatePetById("5feb8bcabeea947148ce4895").then((response) => {
        //     console.log(response, "updatePetById");
        // })
        // return () => {cleanup}
    }, [])

    return (
        <>
            <h1 className="text-center mb-4 mt-5">Dashboard</h1>
            <Router>
                <Navbar
                    className="bg-dark mx-5 rounded"
                >
                    <Link to="/admin/dashboard/users">Users</Link>
                    <Link to="/admin/dashboard/pets">Pets</Link>
                </Navbar>
                <Switch>
                    <Route path="/admin/dashboard/users">
                        <Users users="(users) pass response from get users as props to Users"/>
                        <p>List of all the users in the database(pet owners and administrators)
                        Clicking on a user should display all the pets that the user owns along with all of
                        their profile details so the administrators can contact the user.</p>
                    </Route>
                    <Route path="/admin/dashboard/pets">
                        <p>List of all pets and ability to go to the pet page and edit. (The edit should be just like adding a pet but with the details already displayed there)</p>
                        <Pets pets="(pets) pass response from get pets as props to Pets"/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
export default Dashboard