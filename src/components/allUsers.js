import React from "react"
import { Button } from "react-bootstrap"
import { deleteUserById } from "../lib/api"
import User from "./user"

function Users({ users, getAllUsers }) {

    const deleteUser = (user) => {
        deleteUserById(user._id, user.firstName)
        getAllUsers()
    }
    
    return (
        <>
            <h1 className="text-center mb-4 mt-5">All Users</h1>
            {users.map(user => {
                return (
                    <div className="text-center">
                        <User user={user} key={user._id} />
                        {!user.admin &&
                            <Button
                                className="bg-danger text-warning"
                                onClick={() => { deleteUser(user) }}
                            >
                                {`Delete Owner ${user.firstName}`}
                            </Button>
                        }
                    </div>
                )
            })}
        </>
    )
}
export default Users