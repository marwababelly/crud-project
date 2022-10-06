import { json } from "stream/consumers";

const BASIC_URL = 'https://github.com/Hamza-Mohammad-Sorani/nodejs-crud-api.git';

export const  getAllUseres = async () => {
    const response = await fetch(`${BASIC_URL}/useres.json`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch useres');
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