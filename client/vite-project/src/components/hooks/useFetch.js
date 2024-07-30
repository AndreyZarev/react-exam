
export const login = async (email, password) => {
    const authData = await fetch("http://localhost:3030/users/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(email, password),
    });
    const awaitedData = await authData.json()
    console.log(awaitedData);
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
        console.log("not okayy");
        throw awaitedData

    }


    return awaitedData
}