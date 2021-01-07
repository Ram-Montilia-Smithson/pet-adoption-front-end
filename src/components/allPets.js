import React from "react"
import Pet from "./pet"
let pets = JSON.parse(localStorage.getItem("allPets"))
function Pets() {

    return (
        <>
            <h1 className="text-center mb-4 mt-5">Pets</h1>
            {pets.map(pet => { return (<Pet pet={pet} key={pet._id}/>)})}
        </>
    )
}
export default Pets