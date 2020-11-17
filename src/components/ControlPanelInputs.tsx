import React, { useContext } from 'react'
import { Input, Tooltip } from 'antd';

import { AppContext } from '../contexts/AppContext'

interface ControlPanelInputsProps {

}

export const ControlPanelInputs: React.FC<ControlPanelInputsProps> = ({ ...props }) => {

    const { functionAbis } = useContext(AppContext)


    const buildControlPanelInputs = () => {

    }



    return (
        <div>
            inputs
        </div>
    );
}