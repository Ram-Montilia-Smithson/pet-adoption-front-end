import React from "react"
// let { user } = require("../data.json")
// let allPets = JSON.parse(localStorage.getItem("allPets"))
// let allPets = localStorage.getItem("allPets")

// export const AllPets = React.createContext(allPets)

// let newPet = JSON.parse(window.localStorage.getItem('newPet'))
// export const NewPet = React.createContext(newPet)

let currentUser = JSON.parse(window.localStorage.getItem("user"))
// console.log(currentUser);

const UserContext = React.createContext(currentUser)
export default UserContext


// // 5fe875e5a60ccb614872b295 is the id of the admin user