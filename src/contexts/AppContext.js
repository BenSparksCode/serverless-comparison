import React, { Component, createContext } from 'react'

import fnAbis from "../data/functionsAbi.json"


export const AppContext = createContext()

class AppContextProvider extends Component {

    state = {
        functionAbis: fnAbis,

    }

    render(){
        return(
            <AppContext.Provider value = {{
                ...this.state,
                // assign fns as props here
                }}>
                { this.props.children }
            </AppContext.Provider >
        )
    }



}

export default AppContextProvider