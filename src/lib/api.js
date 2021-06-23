import axios from "axios";

export const postPet = async (data) => {
    const response = await axios.post('/api/pets', data)
        .catch((error) => { return ({ data: `${error}` }) })
    console.log(response);
    if (response.data) return (response.data)
    else return (response)
}

export const postUser = async (url, data) => {
    const response = await axios.post(url, data)
        .catch((error) => { return ({ data: `${error}` }) })
    console.log(response);
    if (response.data) return (response.data)
    else return (response)
}


export const getUsers = async () => {
    const response = await axios.get('/api/users', { withCredentials: true })
        .catch((error) => { return ({ data: `${error}` }) })
    console.log(response);
    if (response.data) return (response.data)
    else return (response)
}

export const getPets = async () => {
    const response = await axios.get('/api/pets', { withCredentials: true })
        .catch((error) => { return ({ data: `${error}` }) })
    console.log(response);
    if (response.data) return (response.data)
    else return (response)
}

export const getPetById = async (id) => {
    const response = await axios.get(`/api/pets/${id}`, { withCredentials: true })
        .catch((error) => { return ({ data: `${error}` }) })
    console.log(response);
    if (response.data) return (response.data)
    else return (response)
}

export const getUserById = async (id) => {
    const response = await axios.get(`/api/users/${id}`, { withCredentials: true })
        .catch((error) => { return ({ data: `${error}` }) })
    console.log(response);
    if (response.data) return (response.data)
    else return (response)
}

export const updateUserById = async (id, newUserInfo) => {
    const response = await axios.put(`/api/users/save/${id}`, newUserInfo, { withCredentials: true })
        .catch((error) => { return ({data:`${error}`}) })
    console.log(response);
    if (response.data) return (response.data)
    else return (response)
}

export const updatePetById = async (url, info) => {
    const response = await axios.put(url, info, { withCredentials: true })
        .catch((error) => { return ({ data: `${error}` }) })
    console.log(response);
    if (response.data) return (response.data)
    else return (response)
}


export const deletePetById = async (id, name) => {
    const response = await axios.delete(`/api/pets/${id}/${name}`, { withCredentials: true })
        .catch((error) => { return ({ data: `${error}` }) })
    console.log(response);
    if (response.data) return (response.data)
    else return (response)
}

export const deleteUserById = async (id, name) => {
    const response = await axios.delete(`/api/users/${id}/${name}`, { withCredentials: true })
        .catch((error) => { return ({ data: `${error}` }) })
    console.log(response);
    if (response.data) return (response.data)
    else return (response)
}