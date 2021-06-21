import React from "react"
import User from "./user"

function Users({ users }) {
    
    return (
        <>
            <h1 className="text-center mb-4 mt-5">All Users</h1>
            {users.map(user => {
                return (
                    <User user={user} key={user._id} />
                )
            })}
        </>
    )
}
export default Users