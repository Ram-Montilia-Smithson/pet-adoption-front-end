import axios from "axios";

export const postPet = async (url, data) => {
    const pet = await axios.post(url, data)
        .then(response => {
            return response.data
        })
        .catch((error) => alert(error))
    console.log(pet);
    return pet
}

export const postUser = async (url, data) => {
    const user = await axios.post(url, data)
        .then(response => {
            return response.data;
        })
        .catch((error) => { return (`${error}`) })
        return user
}


export const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/api/users',
        // { withCredentials: true }
    )
        .catch((error) => { console.log(error); return ({ data: `${error}` }) })
    if (response.data) {
        return (response.data)
    }
    else {
        return (response)
    }
}

export const getPets = async () => {
    const response = await axios.get('http://localhost:5000/api/pets')
        .catch((error) => { console.log(error); return ({ data: `${error}` }) })
    if (response.data) {
        return (response.data)
    }
    else {
        return (response)
    }
}

export const getPetById = async (id) => {
    const response = await axios.get(`http://localhost:5000/api/pets/${id}`)
        .catch((error) => { console.log(error); return ({ data: `${error}` }) })
    if (response.data) {
        return (response.data)
    }
    else {
        return (response)
    }
}

export const getUserById = async (id) => {
    const response = await axios.get(`http://localhost:5000/api/users/${id}`)
    return response
}

export const updateUserById = async (url, newUserInfo) => {
    const response = await axios.put(url, newUserInfo)    
    .catch((error) => { console.log(error); return ({data:`${error}`}) })
    if (response.data) {return (response.data)}
    else {return (response)}
}

export const updatePetById = async (url, info) => {
    const response = await axios.put(url, info)
        .catch((error) => { console.log(error); return ({ data: `${error}` }) })
    // console.log(response);
    if (response.data) {return (response.data)}
    else {return (response)}
}


// works, but not in use in the app
export const deletePetById = async (id) => {
    const response = await axios.delete(`http://localhost:5000/api/pets/${id}`)
    const data = response.data
    return data
}

// works, but not in use in the app
export const deleteUserById = async (id) => {
    const response = await axios.delete(`http://localhost:5000/api/users/${id}`)
    const data = response.data
    return data
}