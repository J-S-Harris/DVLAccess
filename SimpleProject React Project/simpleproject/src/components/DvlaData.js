import React from 'react';

export default function DvlaData(props) {

  return (
    <div className="resultsContainerContainer">

  <div className="resultsContainer">
      <h2 className="resultsContainerHeading">Licence Plate:</h2>
      <h3 className="resultsContainerResult">{props.licencePlate}</h3>
    </div>

    <div className="resultsContainer">
      <h2 className="resultsContainerHeading">Make:</h2>
      <h3 className="resultsContainerResult">{props.make}</h3>
    </div>

    <div className="resultsContainer">
      <h2 className="resultsContainerHeading">Manufactured:</h2>
      <h3 className="resultsContainerResult">{props.yearOfManufacture}</h3>
    </div>

    <div className="resultsContainer">
      <h2 className="resultsContainerHeading">Colour:</h2>
      <h3 className="resultsContainerResult">{props.colour}</h3>
      </div>

    <div className="resultsContainer">
      <h2 className="resultsContainerHeading">Engine Capacity:</h2>
      <h3 className="resultsContainerResult">{props.engineCapacity}</h3>
    </div>

    <div className="resultsContainer">
      <h2 className="resultsContainerHeading">Fuel Type:</h2>
      <h3 className="resultsContainerResult">{props.fuelType}</h3>
    </div>

    <div className="resultsContainer">
      <h2 className="resultsContainerHeading">Co2 Emissions:</h2>
      <h3 className="resultsContainerResult">{props.co2Emissions}</h3>
    </div>

    <div className="resultsContainer">
      <h2 className="resultsContainerHeading">Tax Status:</h2>
      <h3 className="resultsContainerResult">{props.taxStatus}</h3>
    </div>

    <div className="resultsContainer">
      <h2 className="resultsContainerHeading">Tax Due Date:</h2>
      <h3 className="resultsContainerResult">{props.taxDueDate}</h3>
    </div>

    <div className="resultsContainer">
      <h2 className="resultsContainerHeading">MOT Status:</h2>
      <h3 className="resultsContainerResult">{props.motStatus}</h3>
    </div>

    <div className="resultsContainer">
      <h2 className="resultsContainerHeading">MOT Expiry Date:</h2>
      <h3 className="resultsContainerResult">{props.motExpiryDate}</h3>
    </div>

    </div>
)

}