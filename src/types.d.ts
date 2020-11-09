
type ServerlessFunction = {
    name: string,
    inputs: Array<FunctionInput>
}

type FunctionInput = {
    inputName: string,
    inputType: string, // maybe change this
    inputValue: any
}