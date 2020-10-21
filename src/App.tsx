import React from 'react';

import { callAllApisForFunc } from './api/api'

import logo from './logo.svg';
import './App.css';



import axios, { AxiosRequestConfig } from "axios";

const API_KEY = process.env.REACT_APP_AWS_FACTORIAL_JS_API

function App() {



  async function callApi() {


    callAllApisForFunc('factorial', { num: 5 })

    // const config:AxiosRequestConfig = {
    //   method: 'post',
    //   url: 'https://7ol1hufwg6.execute-api.us-east-1.amazonaws.com/default/factorial_JS',
    //   data: {
    //     num: 5
    //   },
    //   headers: {
    //     'x-api-key': API_KEY
    //   },
    // }
    // console.log(config);
    // const res = await axios(config)
    // console.log(res);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <button onClick={callApi}>TEST API</button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
