
export const login = async (email, password) => {
    const authData = await fetch("http://localhost:3030/users/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    const awaitedData = await authData.json()

    if (!authData.ok) {
        throw awaitedData

    }
    return awaitedData
}



export const register = async (email, password) => {
    const authData = await fetch("http://localhost:3030/users/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    const awaitedData = await authData.json();
    if (!authData.ok) {

        throw awaitedData

    }


    return awaitedData
}



export async function create(img, title, text) {

    if (!img || !title || !text) {
        return
    }
    console.log({ img, title, text });
    const authData = await fetch("http://localhost:3030/data/why-us", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ img, title, text }),
    });
    const awaitedData = await authData.json();
    if (!authData.ok) {

        throw awaitedData

    }


    return awaitedData
}