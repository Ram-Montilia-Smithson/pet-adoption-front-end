import React from "react"

let { user } = require("../data.json")
let uu = JSON.parse(window.localStorage.getItem("user"))
console.log(uu);
const UserContext = React.createContext(uu)
export default UserContext


// // 5fe875e5a60ccb614872b295 is the id of the admin user