import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth'
import counterReducer from './counter'


const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})
// 'reducer' can be a object with many reducers, if we have


export default store
