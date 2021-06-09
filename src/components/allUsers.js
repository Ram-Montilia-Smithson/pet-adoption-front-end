import React from "react"
import User from "./user"
// let users = JSON.parse(localStorage.getItem("allUsers"))
function Users() {

    return (
        <>
            <h1 className="text-center mb-4 mt-5">All Users</h1>
            {users.map(user => { return (<User user={user} key={user._id}/>)})}
        </>
    )
}
export default Users