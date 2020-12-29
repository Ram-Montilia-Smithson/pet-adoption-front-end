import axios from "axios";

export const getData = async (url) => {
    const response = await axios.get(url)
    const data = response.data
    return data
}

export const postData = async (url = "", data = {}) => {
    await axios.post(url, data)
        .then((response => {
            console.log(response);
        }))
        .catch((error) => {
            console.log(error);
        });
}

const postPets = async (data) => {
    await axios.post('http://localhost:5000/addPet', data)
        .then((response => {
            console.log(response, "response from postPets");
            // console.log(data, "addPetData");
    }))
        .catch((error) => {
        console.log(error);
    })    
}

const getPets = async () => {
    const response = await axios.get('http://localhost:5000/')
    return response
}

// const getUserById = (id) => {
//     return fetch(`${baseUrl}/${id}`).then(res => res.json())
// }

// const addNewUser = (data) => {
//     return fetch(baseUrl, {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).then(res => res.json())
// }

export { getPets, postPets }