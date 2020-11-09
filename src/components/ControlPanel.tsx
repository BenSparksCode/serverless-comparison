import React, { MouseEvent } from 'react'
import { Dropdown, Button, Menu, Card } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styled from 'styled-components'

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
    return (
        <ContentPanel>
            <h1>Control Panel</h1>
            <Dropdown overlay={functionMenu}>
                <Button>
                    Button <DownOutlined />
                </Button>
            </Dropdown>
            <button>Run</button>
            <input type="text" />
        </ContentPanel>
    );
}

const ContentPanel = styled(Card)`
    width: 95%;
    max-width: 768px;
    height: 10rem;
    border: red 5px solid;
    border-radius: 10px;
    align-self: center;

  `

export default ControlPanel