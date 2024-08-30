import { useState } from "react";
import Header from "./components/Header"
import Input from "./components/Input"
import ResultsTable from "./components/ResultsTable.jsx";
// import {calculateInvestmentResults} from "./util/investment.js"

let INITIAL_INPUT_VALUES={
  initialInvestment:10000,
  annualInvestment:1200,
  expectedReturn:6,
  duration:10,
};
function App() {
const [inputValues,setInputValues]=useState(INITIAL_INPUT_VALUES);
const valueIsValid = inputValues.duration>=1;


function handleInputChange(inputField,newValue){
    setInputValues(prevInputValues=>{
        return {
        ...prevInputValues,
        [inputField]: +newValue
        };
    });
}
// const annualData= calculateInvestmentResults(inputValues);

  return (
    <>
    <Header/>
    <Input handleInputChange={handleInputChange} inputValues={inputValues}/>
    {/* <ResultsTable inputValues={inputValues} /> */}
    {valueIsValid && <ResultsTable inputValues={inputValues} />}

    {!valueIsValid && <p className="center">Please enter Value greater than zero</p>}

    </>
  )
}

export default App
