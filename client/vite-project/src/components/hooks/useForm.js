import { useState } from "react";

export function useFrom(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues)

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }
    const submitHandler = (e) => {
        e.preventDefault()
        submitCallback(values)
    }
    return {
        values,
        changeHandler,
        submitHandler,
    }
}