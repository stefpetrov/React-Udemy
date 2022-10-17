import { createStore } from 'redux'



const counterReducer = (state = { counter: 0, visibility: "visible" }, action) => {
    if (action.type === 'increment') {

        return {
            counter: state.counter + 1,
            visibility: state.visibility
        }
    }
    if (action.type === 'decrement') {

        return {
            counter: state.counter - 1,
            visibility: state.visibility

        }
    }
    if (action.type === 'increase') {

        return {
            counter: state.counter + action.payload,
            visibility: state.visibility

        }
    }
    if (action.type === "toggle") {

        if (state.visibility === "visible") {
            return {
                counter: state.counter,
                visibility: "hidden"
            }

        }
        if (state.visibility === "hidden") {
            return {
                counter: state.counter,
                visibility: "visible"
            }

        }


    }

    return state
}


const store = createStore(counterReducer)

export default store
