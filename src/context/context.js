import React from "react"

let currentUser = JSON.parse(window.localStorage.getItem("user"))

const UserContext = React.createContext(currentUser)
export default UserContext