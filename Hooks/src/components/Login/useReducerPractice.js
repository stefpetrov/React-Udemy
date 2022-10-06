import { useReducer } from "react";



const reducerFn = (state, action) => {

    if (action.type == 'USER_INPUT') {
        return { value: action.payload, isValid: action.payload.trim().length > 6 }
    }
    if (action.type == 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 6 }
    }

    return { value: '', isValid: false }

}

const [state, dispatchEmail] = useReducer(reducerFn, {
    value: '',
    isValid: null
})


const emailChangeHandler = (event) => {
    dispatchEmail({
        type: 'USER_INPUT',
        payload: event.target.value
    })
}


const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' })
}




