import React, {createContext, useContext, useReducer} from "react";

// Preparing the data layer
export const StateContext = createContext();

//higher order function
export const StateProvider =({ reducer, initialState, children})=> (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children} 
    </StateContext.Provider>
);

//Hooks which allows us to pull information from data layer
export const useStateValue = () => useContext(StateContext);
//  {/* <= the appComponent in index.js page */} line no 9
//  {/* initialState contains the value at start and reducer is  smart and keep tack of the change  */} line no 7
