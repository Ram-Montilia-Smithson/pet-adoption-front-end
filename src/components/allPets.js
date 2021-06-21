import React from "react"
import Pet from "./pet-card"

// make the edit pet page and insert here

function Pets({ pets }) {

    return (
        <>
            <h1 className="text-center mb-4 mt-5">All Pets In Adoption Center</h1>
            {pets.map(pet => {
                // add edit pet as a modal
                return (
                    <Pet pet={pet} key={pet._id} />
                )
            })}
        </>
    )
}
export default Pets