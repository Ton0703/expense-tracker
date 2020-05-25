import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
        { id: 0, text: '水果', amount: -20},
        { id: 1, text: '文具', amount: -15},
        { id: 2, text: '搬砖', amount: 40}
    ]
}

export const GlobalContext = createContext(initialState)


export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState)
   
   return (
       <GlobalContext.Provider value={{
           transactions: state.transactions,
           dispatch: dispatch
       }}>
           {children}
       </GlobalContext.Provider>
   )
}