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