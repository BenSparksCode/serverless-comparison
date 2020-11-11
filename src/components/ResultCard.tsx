import React from 'react'
import { Progress, Spin } from 'antd';

import { ResultCardDiv } from  "./StyledComponents"

interface ResultCardProps {

}

const ResultCard: React.FC<ResultCardProps> = ({...props}) => {
        return (
            <ResultCardDiv>
                {props.children}
                <Progress type="circle" percent={100} width={30} />
                <Progress type="circle" percent={100} width={30} status="exception"/>
                <Spin />
            </ResultCardDiv>
        );
}

export default ResultCard