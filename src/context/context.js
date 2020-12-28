import React from "react"
let { users } = require("../data.json")
let user = users[0]

const UserContext = React.createContext(user)
export default UserContext
