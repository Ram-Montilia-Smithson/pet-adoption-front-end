import React from "react"

// let currentUser = 1
// console.log(currentUser);


export const UserContext = React.createContext({
    login: true,
    admin: true,
    firstName: "ram",
    savedPets: [1,2,3],
    _id: "5ff9bc4e47dbc546d8f30069"
})

// export default UserContext