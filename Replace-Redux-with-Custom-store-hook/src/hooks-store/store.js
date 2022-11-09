import { useEffect, useState } from "react"

let globalState = {}
let listeners = []
let actions = {}

export const useStore = () => {
    const setState = useState(globalState)[1]

    const dispatch = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload)
        globalState = { ...globalState, ...newState }

        for (const listener of listeners) {
            // listener is a function in this case: setState
            // it is the same like setState(globalState), so the state is changed and React will
            // rerender the component, which use this custom hook
            listener(globalState)
        }
    }

    useEffect(() => {
        listeners.push(setState)

        return () => {
            listeners = listeners.filter(listener => listener !== setState)
        }
    }, [setState])


    return [globalState, dispatch]


}

export const initStore = (userAction, initialState) => {
    if (initialState) {
        globalState = { ...globalState, ...initialState }
    }
    actions = { ...actions, ...userAction }

}