import React from "react"

let currentUser = 1
console.log(currentUser);

const UserContext = React.createContext(currentUser)
export default UserContext