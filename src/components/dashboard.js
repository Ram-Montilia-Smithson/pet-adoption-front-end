import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import { Navbar } from "react-bootstrap"
import React, { useEffect, useState} from "react"
import Pets from "./allPets"
import Users from "./allUsers"
import { getPets, getUsers } from "../lib/api"

function Dashboard() {

    const [pets, setPets] = useState([])
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        getAllUsers()
        getAllPets()
    }, [])

    const getAllPets = async () => {
        const pets = await getPets()
        setPets(pets)
    }

    const getAllUsers = async () => {
        const users = await getUsers()
        setUsers(users)
    }

    return (
        <>
            <h1 className="text-center mb-4 mt-5">Dashboard</h1>
            <Router>
                <Navbar className="bg-dark mx-5 rounded d-flex justify-content-around">
                    <Link to="/admin/dashboard/users">Users</Link>
                    |
                    <Link to="/admin/dashboard/pets">Pets</Link>
                </Navbar>
                <Switch>
                    <Route path="/admin/dashboard/users">
                        <Users users={users}/>
                    </Route>
                    <Route path="/admin/dashboard/pets">
                        <Pets pets={pets}/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
export default Dashboard