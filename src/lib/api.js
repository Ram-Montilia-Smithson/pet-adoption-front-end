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

// works good for signUp and logIn
export const postUser = async (url, data) => {
    // console.log(url,data);
    const user = await axios.post(url, data)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => { return (`${error}`) })
        console.log(user);
        return user
}


export const getUsers = async () => {
    await axios.get('http://localhost:5000/api/users')
        .then(response => {
            let data = response.data
            // localStorage.setItem('allUsers', JSON.stringify(data))
            // document.cookie = `allUsers=${JSON.stringify(data)}`
            console.log(data);
            return (data)
        })
        .catch((error) => {alert(error);})
}

export const getPets = async () => {
    await axios.get('http://localhost:5000/api/pets')
        .then(response => {
            // console.log(response.data);
            return response.data
        })
        // .then(response => console.log(response))
        .catch((error) => {alert(error);})
}

export const getPetById = async (id) => {
    const response = await axios.get(`http://localhost:5000/api/pets/${id}`)
    const data = response.data
    return data
}

export const getUserById = async (id) => {
    const response = await axios.get(`http://localhost:5000/api/users/${id}`)
    return response
}

export const updateUserById = async (url, newUserInfo) => {
    // console.log("url",url,"newUserInfo",newUserInfo);
    const response = await axios.put(url, newUserInfo)    
    .catch((error) => { console.log(error); return ({data:`${error}`}) })
    if (response.data) {
        return (response.data)
    }
    else {
        return (response)
    }
}

export const updatePetById = async (url, info) => {
    await axios.put(url, info)
        .then(response => {return response.data})
        .then(() => {window.location.reload()})
        .catch((error) => {alert(error);})
}

// Edit Pet API - is not ready 
// for admin only
// Route: ‘/pet/: id’[PUT](protected to admin only)
// The add pet api is responsible for editing pets
// Validate all the user input is valid
// Handle photo upload
// Store pet information in the database
// Fields: Same as Add Pet API

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