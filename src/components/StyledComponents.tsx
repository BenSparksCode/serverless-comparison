import { Card } from 'antd';

import styled from 'styled-components'


export const ContentPanel = styled(Card)`
    width: 95%;
    max-width: 864px;
    border-radius: 8px;
    align-self: center;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  `

export const ContentPanelRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`