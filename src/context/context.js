import React from "react"
let { users } = require("../data.json")
let user = users[3]

const UserContext = React.createContext(user)
export default UserContext
