import React, { Component, createContext } from 'react'

import fnAbis from "../data/functionsAbi.json"


export const AppContext = createContext()

class AppContextProvider extends Component {

    state = {
        functionAbis: fnAbis,
        selectedFunction: null,
        inputValues: {},
    }

    changeSelectedFunction = (fnObj) => {
        this.setState({
            selectedFunction: fnObj
        })
    }

    updateInputValues = (key, value) => {
        this.setState({
            inputValues: {...this.state.inputValues, ...{key:value}}
        })
        console.log(this.state.inputValues);
    }

    resetInputValues = () => {

        let newValues
        selectedFunction.inputs.forEach(input => {
            newValues[input.inputName] = input.default
        });

        this.setState({
            inputValues: newValues
        })
        console.log(this.state.inputValues, newValues);
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