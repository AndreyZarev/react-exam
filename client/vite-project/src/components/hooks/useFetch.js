
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



export const create = async (img, person, experience, achievments) => {

    return console.log(img, person, experience, achievments);
    // const authData = await fetch("http://localhost:3030/users/register", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    // });
    // const awaitedData = await authData.json();
    // if (!authData.ok) {

    //     throw awaitedData

    // }


    // return awaitedData
}