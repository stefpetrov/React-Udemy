import { configureStore, createSlice } from '@reduxjs/toolkit'


const initialState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
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

const store = configureStore({
    reducer: counterSlice.reducer
})
// 'reducer' can be a object with many reducers, if we have

export default store
