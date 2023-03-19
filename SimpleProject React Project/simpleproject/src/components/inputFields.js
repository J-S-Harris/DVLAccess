import React, { useState } from 'react';
import axios from 'axios';
import DvlaData from './DvlaData.js';   

export default function FormComponent() {


    const [inputText, setInputText] = useState("");
    const updateTextBoxValue = event => {
        setInputText(event.target.value)
    }

    let stringifiedOutput, outputInfo
    

    let [licencePlate, setLicencePlate] = useState("")
    let [make, setMake] = useState("")
    let [yearOfManufacture, setYearOfManufacture] = useState("")
    let [colour, setColour] = useState("")
    let [engineCapacity, setEngineCapacity] = useState("")
    let [fuelType, setFuelType] = useState("")
    let [co2Emissions, setCo2Emissions] = useState("")
    let [taxStatus, setTaxStatus] = useState("")
    let [taxDueDate, setTaxDueDate] = useState("")
    let [motStatus, setMotStatus] = useState("")
    let [motExpiryDate, setMotExpiryDate] = useState("")

      function apiCall() {
    
        // Example licence plates: AA19AAA OR GA11NZZ
        
        axios.get(`http://localhost:3001/`+inputText)
        .then((response) => {
   
            stringifiedOutput = JSON.stringify(response.data)   
            outputInfo = JSON.parse(stringifiedOutput);
            
            setLicencePlate(outputInfo.registrationNumber)
            setMake(outputInfo.make)
            setYearOfManufacture(outputInfo.yearOfManufacture)
            setColour(outputInfo.colour)
            setEngineCapacity(outputInfo.engineCapacity)
            setFuelType(outputInfo.fuelType)
            setCo2Emissions(outputInfo.co2Emissions)
            setTaxStatus(outputInfo.taxStatus)
            setTaxDueDate(outputInfo.taxDueDate)
            setMotStatus(outputInfo.motStatus)
            setMotExpiryDate(outputInfo.motExpiryDate)
        })
    console.log("Clicked")
    }

return(
    <div className="uberContainer">
        <div className="container">
            <h1>Welcome to DVLAccess</h1>
            <input onChange={updateTextBoxValue} className="inputBox" placeholder="Reg Number"></input>
            <button onClick={apiCall}>Search</button>
        </div>

        <DvlaData id="outputBox" licencePlate={licencePlate} make={make} yearOfManufacture={yearOfManufacture} colour={colour} engineCapacity={engineCapacity} fuelType={fuelType} co2Emissions={co2Emissions} taxStatus={taxStatus} taxDueDate={taxDueDate} motStatus={motStatus} motExpiryDate={motExpiryDate}/>

    </div>
)
}