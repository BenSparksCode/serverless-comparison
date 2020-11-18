import React, { useContext } from 'react'

import { NumberInput } from './NumberInput'
import { AppContext } from '../contexts/AppContext'

interface ControlPanelInputsProps {

}

export const ControlPanelInputs: React.FC<ControlPanelInputsProps> = ({ ...props }) => {

    const { selectedFunction } = useContext(AppContext)

    


    const buildControlPanelInputs = () => {

        return selectedFunction.inputs.map((input: any) => {
            switch (input.inputType) {
                case "TEXT_FIELD":
                    return (
                        
                    )
                    break;

                default:
                    return ""
                    break;
            }
        })

    }



    return (
        <div>
            inputs
        </div>
    );
}