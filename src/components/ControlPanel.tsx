import React, { useContext, useState } from 'react'
import { Dropdown, Button, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styled from 'styled-components'

import { ContentPanel, ContentPanelRow } from './StyledComponents'
import { AppContext } from '../contexts/AppContext';

interface ControlPanelProps {

}

const handleDropdownClick = (e: any) => {
    console.log("Dropdown choice:", e.key);
}

const functionMenu = (
    <Menu onClick={handleDropdownClick}>
        <Menu.Item key="1" >
            1st menu item
      </Menu.Item>
        <Menu.Item key="2" >
            2nd menu item
      </Menu.Item>
        <Menu.Item key="3" >
            3rd menu item
      </Menu.Item>
    </Menu>
);




const ControlPanel: React.FC<ControlPanelProps> = ({ }) => {
    const { changeSelectedFunction, selectedFunction, functionAbis } = useContext(AppContext)
    const [loading, setLoading] = useState(false)

    const toggleLoading = () => {
        setLoading(!loading)
    }

    const buildDropdown = () => {
        const menuItems = functionAbis.map((fn: { id: string | number | null | undefined; label: React.ReactNode; }) => {
            return (
                <Menu.Item key={fn.id} onClick={() => changeSelectedFunction(fn)}>
                    {fn.label}
                </Menu.Item>
            )
        })


        return (
            <Menu onClick={handleDropdownClick}>
                {menuItems}
            </Menu>
        )
    }


    return (
        <ContentPanel>
            <h1>Choose a Function</h1>

            <ContentPanelRow>
                <FunctionDropdown overlay={buildDropdown}>
                    <Button>
                        {selectedFunction ? selectedFunction.label : "Choose a function"} <DownOutlined />
                    </Button>
                </FunctionDropdown>
                <Button type="primary" onClick={() => toggleLoading}>
                    Run
                </Button>
            </ContentPanelRow>
            <h1>Function inputs</h1>

            <ContentPanelRow>
                <FunctionDropdown overlay={functionMenu}>
                    <Button>
                        Button <DownOutlined />
                    </Button>
                </FunctionDropdown>
                <Button type="primary" loading={true} onClick={() => toggleLoading}>
                    Run
                </Button>
            </ContentPanelRow>

            {/* <button>Run</button> */}
            {/* <input type="text" /> */}
        </ContentPanel>
    );
}


const FunctionDropdown = styled(Dropdown)`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
  `

export default ControlPanel