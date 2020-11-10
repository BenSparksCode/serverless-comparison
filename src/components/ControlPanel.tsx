import React, { useState } from 'react'
import { Dropdown, Button, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styled from 'styled-components'

import { ContentPanel, ContentPanelRow } from './StyledComponents'

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
    const [loading, setLoading] = useState(false)

    const toggleLoading = () => {
        setLoading(!loading)
    }


    return (
        <ContentPanel>
            <h1>Choose a Function</h1>

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