import React from 'react'

import ResultCard from './ResultCard'
import { ContentPanel } from "./StyledComponents"

interface ResultsPanelProps {

}

const ResultsPanel: React.FC<ResultsPanelProps> = ({ }) => {
  return (
    <ContentPanel>
      <h1>Results</h1>

      <ResultCard>
        <p>Factorial - AWS Lambda - Node - 3 seconds</p>
      </ResultCard>

      <ResultCard>
        <p>Factorial - AWS Lambda - Python - 2.5 seconds</p>
      </ResultCard>

      <ResultCard>
        <p>Factorial - Google Cloud Run - Node - 2 seconds</p>
      </ResultCard>


    </ContentPanel>
  );
}

export default ResultsPanel