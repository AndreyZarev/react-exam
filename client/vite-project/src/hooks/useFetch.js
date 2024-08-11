
import * as api from "../api/api-links"
const base = api.baseUrl
export const login = async (email, password, headers) => {
    console.log(headers);
    const authData = await fetch("http://localhost:3030/users/login", {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ email, password }),
    });
    const awaitedData = await authData.json()

    if (!authData.ok) {
        throw awaitedData

    }
    return awaitedData
}



export const register = async (email, password, headers) => {
    const authData = await fetch("http://localhost:3030/users/register", {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ email, password }),
    });
    const awaitedData = await authData.json();
    if (!authData.ok) {

        throw awaitedData

    }


    return awaitedData
}



export async function create(img, title, text, postEmail, headers) {


    if (!img || !title || !text || !postEmail) {
        return
    }
    const authData = await fetch("http://localhost:3030/data/why-us", {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ img, title, text, postEmail }),
    });
    const awaitedData = await authData.json();
    if (!authData.ok) {

        throw awaitedData

    }


    return awaitedData
}

export async function update(img, title, text, postEmail, headers, postid) {


    if (!img || !title || !text || !postEmail) {
        return
    }

    const authData = await fetch(`http://localhost:3030/data/why-us/${postid}`, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify({ img, title, text, postEmail }),
    });
    const awaitedData = await authData.json();
    if (!authData.ok) {

        throw awaitedData

    }


    return awaitedData
}

export async function deleteP(headers, postid) {


    const authData = await fetch(`http://localhost:3030/data/why-us/${postid}`, {
        method: 'DELETE',
        headers: headers,

    });
    const awaitedData = await authData.json();
    if (!authData.ok) {

        throw awaitedData

    }


    return awaitedData
}


export const logoutF = async (headers) => {
    const authData = await fetch("http://localhost:3030/users/logout", {
        method: 'GET',
        headers: headers,

    });

    return authData
}



export async function likes(img, person, phone, _id, experience, achievments, likes, users, headers, trainerid) {

    likes = Number(likes)
    const authData = await fetch(`${base}/trainers/${trainerid}`, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify({ img, person, phone, _id, experience, achievments, likes, users }),
    });
    const awaitedData = await authData.json();
    if (!authData.ok) {

        throw awaitedData

    }


    return awaitedData
}