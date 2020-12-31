import React from "react"

let { users } = require("../data.json")
let user = users[0]

const UserContext = React.createContext(user)
export default UserContext


// 5fe875e5a60ccb614872b295 is the id of the admin user