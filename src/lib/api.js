import axios from "axios";

export const postPet = async (data) => {
    console.log("api",data);
    await axios.post('http://localhost:5000/addPet', data)
        .then((response => {
            console.log(response, "response from postPet");
        }))
        .catch((error) => {
        console.log(error);
        })
}

export const postUser = async (url,data) => {
    await axios.post(url, data)
        .then(response => {
            console.log(response, "response from postUser");
            return response.data;
        })
        .then(data => {
            localStorage.setItem('user', JSON.stringify(data))
            // Cookies.set('', data.accessToken)
        })
        .then(() => {
            const reload = window.location.reload()
        })
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

// Get Pet By ID API - V
// Route: ‘/pet/: id’[GET]
// Get a pet by ID should take an id and return the corresponding pet from the database.
export const getPetById = async (id) => {
    const response = await axios.get(`http://localhost:5000/api/pets/${id}`)
    const data = response.data
    return data
}

// Get User By ID API
// Route ‘/user/: id’[GET]
// This api allows you to get a user based on the user's id. 

// Get User By ID API
// Route ‘/user/: id / full’[GET]
// This api allows you to get a user based on the user's id. 
// The API should return all the user details(aside from password) and the users pets they own.

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

// Ensure that if the email is being changed it’s not already in use
export const updateUserById = async (id, newUserInfo) => {
    console.log("id",id,"newUserInfo",newUserInfo);
    await axios.put(`http://localhost:5000/api/users/${id}`, newUserInfo)
        .then(response => {
            console.log(response, "response from postUser");
            return response.data;
        })
        .then(data => {
            localStorage.setItem('user', JSON.stringify(data))
        })
        .then(() => {
            const reload = window.location.reload()
        })
        .catch((error) => {
            console.log(error);
        })
}

// Edit Pet API
// Route: ‘/pet/: id’[PUT](protected to admin only)
// The add pet api is responsible for editing pets
// Validate all the user input is valid
// Handle photo upload
// Store pet information in the database
// Fields: Same as Add Pet API
export const updatePetById = async (id) => {
    const response = await axios.put(`http://localhost:5000/api/pets/${id}`)
    const data = response.data
    return data
}

// Adopt / Foster API
// Route ‘/pet/: id / adopt’[POST](protected to logged in users)
// The Adopt / Foster API is responsible for adding the pet to the current users pets.
// This API also should change the pet’s adoption status.
//     Field:
// Type(Adopt or foster)

// Return Pet API
// Route ‘/pet/: id /return ’[POST](protected to logged in users)
// The Return Pet API is responsible for returning the pet to the agency.
// The API should change the pets status back to available
// The API should remove the pet from the users pets.

// Save Pet API
// Route ‘/pet/: id / save’[POST](protected to logged in users)
// The save PET api allows a user to save a pet for later
// The saved pet should be stored as saved in the users account

// Delete Saved Pet API
// Route ‘/pet/: id / save’[DELETE](protected to logged in users)
// The save PET api allows a user to remove a saved pet.

// Get Pets By User ID API
// Route ‘/pet/user /: id’[GET]
// This api allows a user to get the pets owned by(or saved) by a user based on the user id.


// export const postUser = async (data) => {
//     await axios.post('http://localhost:5000/api/users', data)
//         .then(response => {
//             console.log(response, "response from postUser");
//             return response.data;
//         })
//         .then(data => {
//             localStorage.setItem('user', JSON.stringify(data))
//             // Cookies.set('', data.accessToken)
//         })
//         .then(() => {
//             const reload = window.location.reload()
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }