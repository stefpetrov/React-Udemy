import { configureStore, createSlice } from '@reduxjs/toolkit'


const initialCounterState = {
    counter: 0,
    showCounter: true
}
const initialAuthState = {
    isLoggedIn: false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter += action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        },
    }
})

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isLoggedIn = true
        },
        logout(state) {
            state.isLoggedIn = false
        }
    }

})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})
// 'reducer' can be a object with many reducers, if we have


export const counterActions = counterSlice.actions
export const authActions = authSlice.actions
export default store
