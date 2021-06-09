import React from "react"

// let currentUser = 1
// console.log(currentUser);


export const UserContext = React.createContext({
    login: true,
    admin: true,
    firstName: "ram",
    savedPets: [],
})

// export default UserContext