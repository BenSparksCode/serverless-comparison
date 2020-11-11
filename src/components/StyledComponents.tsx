import { Card } from 'antd';

import styled from 'styled-components'


export const ContentPanel = styled(Card)`
    width: 95%;
    max-width: 864px;
    border-radius: 8px;
    align-self: center;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    margin-bottom: 40px;
  `

export const ContentPanelRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`
export const ResultCardDiv = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);
    border: 1px #d3d3d3 solid;
`

export const Footer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    bottom: 0;
    height: 5rem;
    background: #f0f2f5;
    width: 100%;
`
