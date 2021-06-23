import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import { Navbar } from "react-bootstrap"
import React, { useEffect, useState} from "react"
import Pets from "./allPets"
import Users from "./allUsers"
import { getPets, getUsers } from "../lib/api"

function Dashboard() {

    const [pets, setPets] = useState([])
    const [users, setUsers] = useState([])
    const [error, setError] = useState("")
    
    useEffect(() => {
        getAllUsers()
        getAllPets()
    }, [])

    const getAllPets = async () => {
        const pets = await getPets()
        if (typeof pets === "string") setError(pets)
        else {
            setPets(pets)
            setError("")
        }
    }

    const getAllUsers = async () => {
        const users = await getUsers()
        if (typeof users === "string") setError(users)
        else {
            setUsers(users)
            setError("")
        }
    }

    return (
        <>
            <h1 className="text-center mb-4 mt-5">Dashboard</h1>
            <h2>{error}</h2>
            <Router>
                <Navbar className="bg-dark mx-5 rounded d-flex justify-content-around">
                    <Link to="/admin/dashboard/users">Users</Link>
                    |
                    <Link to="/admin/dashboard/pets">Pets</Link>
                </Navbar>
                <Switch>
                    <Route path="/admin/dashboard/users">
                        <Users users={users} getAllUsers={getAllUsers}/>
                    </Route>
                    <Route path="/admin/dashboard/pets">
                        <Pets pets={pets} getAllPets={getAllPets}/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
export default Dashboard