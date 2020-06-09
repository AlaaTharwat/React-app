import axios from 'axios'


const baseURL = "http://localhost:8001/users";
export async function getUsers(key = "") {
    console.log('getUsers action');
    let filteredList;

    let data = await axios.get(`${baseURL}`).then((response) => {
        return response.data;
    })
        .catch((err) => {
            console.log(err)
        });

    console.log(data)
    filteredList = data.filter((user) => {
        return user.name.includes(key);
    })

    return {

        type: 'USERS_LIST',
        payload: filteredList
    }
}
export function getUserDetails(id = 0) {
    //fetchApi
    //fetchApi
    let data = axios.get(`${baseURL}/${id}`)
        .then((response) => {
            console.log(response)
            return response.data;
        })
        .catch((err) => {
            console.log(err)
        })
    return {
        type: 'USER_DETAILS',
        payload: data
    }
}

export function clearDetails() {
    return {
        type: 'CLEAR_DETAILS',
        payload: {},

    }
}


export function DeleteUser(id = 0) {

    let data = axios
        .delete(`${baseURL}/${id}`)
        .then((response) => {
            console.log(response)
            return response.data;
        })
        .catch((err) => {
            console.log(err)
        })

    return {
        type: 'DELETE_USER',
        payload: data
    }
}

export function addUser(user) {
    let data = axios.post(`http://localhost:8001/users`,  user )
        .then(res => {
            console.log(res);
            console.log(res.data);
        })

    return {
        type: 'ADD_USER',
        payload: data
    }
}


