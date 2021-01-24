// set up data layer
// we need this to track

import React, { createContext, useContext, useReducer } from "react";
import Reducer, { INITIAL_STATE } from './../Reducer';
import logger from 'use-reducer-logger';

// this is the data layer
export const StateContext = createContext();

// const useGlobalState = () => {
//     const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

//     return { state, dispatch };
// }

// buiuld a provider
export const StateProvider = ({ children }) => {

    return (
        <StateContext.Provider value={useReducer(logger(Reducer), INITIAL_STATE)}>
            {children}
        </StateContext.Provider>
    )
};

export const useStateValue = () => useContext(StateContext);