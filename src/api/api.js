import axios from "axios";

const BASIC_URL = 'https://github.com/Hamza-Mohammad-Sorani/nodejs-crud-api.git';

// export const API = axios.create({
//     BASIC_URL: 'https://github.com/Hamza-Mohammad-Sorani/nodejs-crud-api.git'
//     // BASIC_URL: 'https://crud-7d1c4-default-rtdb.firebaseio.com/' // Firebase DataBase
// });

export const getAllusers = async () => {
    const response = await fetch(`${BASIC_URL}/users.json`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch users');
    }

    const tranformedSUeres = [];

    for (const key in data) {
        const userobj = {
            id: key,
            ...data[key],
        };
        tranformedSUeres.push(userobj);
    }

    return tranformedSUeres;
}

// export const getSingleUser = () => {
//     const getUser = API.get(BASIC_URL)
//         .then(res => {
//             const user = res.data;
//         })
//     if (!getUser.ok) {
//         throw new Error(error.message || 'Could not fetch user');
//     }
//     return user;
// }

export const getUser = async () => {
    const response = await fetch(`${BASIC_URL}`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(error.message || 'Could not fetch user');
    }

    const loadedUser = {
        id: key,
        ...data,
    };
    return loadedUser;
};

export const addUser = async (userData) => {
    const response = await fetch(`${BASIC_URL}/user.json`,{
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not create user');
    }

    return null;
}