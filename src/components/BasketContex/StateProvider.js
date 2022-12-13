import React, {createContext, useContext, useReducer, useState} from "react";

export const StateContext = createContext();

// Building a Provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


// This is how I use it
export const useStateValue = () => useContext(StateContext);