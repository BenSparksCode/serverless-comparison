import axios, { AxiosRequestConfig } from "axios";

const apiKeys = {
    'factorial': {
        'aws': {
            'js': process.env.REACT_APP_AWS_FACTORIAL_JS_API,
            'python': process.env.REACT_APP_AWS_FACTORIAL_PYTHON_API
        },
        'google': {
            'js': ''
        }
    },
    'prime': {
        'aws': {
            'js': '',
            'python': ''
        },
        'google': {
            'js': ''
        }
    },
}

const endpoints = {
    'factorial': {
        'aws': {
            'js': 'https://7ol1hufwg6.execute-api.us-east-1.amazonaws.com/default/factorial_JS',
            'python': 'https://f9od4raxx9.execute-api.us-east-1.amazonaws.com/default/factorial_PYTHON'
        },
        'google': {
            'js': ''
        }
    },
    'prime': {
        'aws': {
            'js': '',
            'python': ''
        },
        'google': {
            'js': ''
        }
    },
}

const baseConfig = {
    method: 'post',
    data: {},
    url: '',
    headers: { 'x-api-key': 0 }
}

// Calls an API
// Takes function name as string
// Takes args to be passed as API body, as object
export const callApi = (endpoint, apiKey, bodyArgs) => {
    console.log("Calling API endpoint ", endpoint);
    const config = {
        ...baseConfig, ...{
            data: bodyArgs,
            url: endpoint,
            headers: { 'x-api-key': apiKey }
        }
    }

    console.log(config);

}

// Calls all APIs for a given function
// Takes function name as string
// Takes args to be passed as API body, as object
export const callAllApisForFunc = (funcName, bodyArgs) => {
    console.log("Calling all APIs for", funcName);

    const [funcEndpoints, funcApiKeys] = [endpoints[funcName], apiKeys[funcName]]

    for (const cloud in funcEndpoints) {

        const langs = funcEndpoints[cloud];

        for (const lang in langs) {

            callApi(
                funcEndpoints[cloud][lang],
                funcApiKeys[cloud][lang],
                bodyArgs
            )

        }


    }

    let res = {}

    return res
}