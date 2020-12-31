import axios from "axios";

export const postPet = async (data) => {
    await axios.post('http://localhost:5000/api/pets', data)
        .then((response => {
            console.log(response, "response from postPet");
        }))
        .catch((error) => {
        console.log(error);
        })   
}

export const postUser = async (data) => {
    await axios.post('http://localhost:5000/api/users', data)
        .then((response => {
            console.log(response, "response from postUser");
        }))
        .catch((error) => {
            console.log(error);
        })
}

export const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/api/users')
    const data = response.data
    return data
}

export const getPets = async () => {
    const response = await axios.get('http://localhost:5000/api/pets')
    const data = response.data
    return data
}

export const getPetById = async (id) => {
    const response = await axios.get(`http://localhost:5000/api/pets/${id}`)
    const data = response.data
    return data
}

export const getUserById = async (id) => {
    const response = await axios.get(`http://localhost:5000/api/users/${id}`)
    // const data = response.data
    return response
}

export const deletePetById = async (id) => {
    const response = await axios.delete(`http://localhost:5000/api/pets/${id}`)
    const data = response.data
    return data
}

export const deleteUserById = async (id) => {
    const response = await axios.delete(`http://localhost:5000/api/users/${id}`)
    const data = response.data
    return data
}

export const updateUserById = async (id) => {
    const response = await axios.put(`http://localhost:5000/api/users/${id}`)
    const data = response.data
    return data
}

export const updatePetById = async (id) => {
    const response = await axios.put(`http://localhost:5000/api/pets/${id}`)
    const data = response.data
    return data
}