import { Button } from "react-bootstrap";

function PetPage(props) {

    console.log(props)

    return (
        <p>
            {/* {pet.status === "Adopted" && <><Button variant="danger">return {pet.name}</Button></>}
            {pet.status === "Fostered" && <><Button variant="info">adopt {pet.name}</Button></>}
            {pet.status === "Available" &&
                <>
                <Button variant="primary">foster the pet</Button>
                <Button variant="info">adopt the pet</Button>
                </>
            } */}
            <br /><Button>save for later</Button>
        </p>
    )
}
export default PetPage



// const handleOnReturn = () => {
//     updatePet(`http://localhost:5000/api/pets/return/${singlePet._id}`,
//         { pet: singlePet._id, updateType: "Return" })
//         .then(alert(`${singlePet.name} was returned successfully!`))
// }

// const handleOnFoster = () => {
//     updatePet(`http://localhost:5000/api/pets/foster/${singlePet._id}`,
//         { pet: singlePet._id, user: currentUser._id, updateType: "Foster" })
//         .then(alert(`${singlePet.name} was fostered successfully!`))
// }

// const handleOnAdopt = () => {
//     updatePet(`http://localhost:5000/api/pets/adopt/${singlePet._id}`,
//         { pet: singlePet._id, user: currentUser._id })
//         .then(alert(`${singlePet.name} was adopted successfully!`))
// }

// const handleOnSave = () => {
//     if (singlePet.petStatus === "Saved") {
//         updatePet(`http://localhost:5000/api/pets/save/${singlePet._id}`,
//             { pet: singlePet._id, user: currentUser._id, updateType: "Unsave" })
//             .then(alert(`${singlePet.name} was removed from your saved pets list successfully!`))
//     } else {
//         updatePet(`http://localhost:5000/api/pets/save/${singlePet._id}`,
//             { pet: singlePet._id, user: currentUser._id, updateType: "Save" })
//             .then(alert(`${singlePet.name} was saved successfully!`))
//     }
// }
