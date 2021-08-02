import React from "react";
import apiClient from "../functions/apiClient";

export const ApiContext = React.createContext({});

export const ApiProvider = (props) => {
    return (
        <ApiContext.Provider value={ apiClient }>
            {props.children}
        </ApiContext.Provider>
    );
}
