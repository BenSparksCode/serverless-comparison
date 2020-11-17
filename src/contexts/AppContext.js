import React, { Component, createContext } from 'react'

import fnAbis from "../data/functionsAbi.json"


export const AppContext = createContext()

class AppContextProvider extends Component {

    state = {
        functionAbis: fnAbis,
        selectedFunction: null,

    }

    changeSelectedFunction = (fnObj) => {
        this.setState({
            selectedFunction: fnObj
        })
    }

    render(){
        return(
            <AppContext.Provider value = {{
                ...this.state,
                changeSelectedFunction: this.changeSelectedFunction,
                // assign fns as props here
                }}>
                { this.props.children }
            </AppContext.Provider >
        )
    }



}

export default AppContextProvider