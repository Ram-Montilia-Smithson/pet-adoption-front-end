import React from "react"
let { pets, users } = require("../data.json")
const user = users[2]
pets.forEach((pet) => {
    if (pet.userId === user.id) {user.pets.push(pet)}
})
const UserContext = React.createContext(user)
export default UserContext