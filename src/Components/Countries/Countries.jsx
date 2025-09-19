import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (country) => {
    // console.log("visited Countries");
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const [visitedFlag, setVisitedFlag] = useState([]);
  const handleVisitedFlag = (flags) => {
    console.log("flag visited");
    const newVisitedFlag = [...visitedFlag, flags];
    setVisitedFlag(newVisitedFlag);
  };

  return (
    <div>
      <h1>Countries : {countries.length}</h1>
      <h3>Countries Visited : {visitedCountries.length} </h3>
      <ol>
        {visitedCountries.map((country, index) => (
          <li key={index}>{country.name.common}</li>
        ))}
      </ol>
      <div>
        <h3>Visited Flags : {visitedFlag.length}</h3>
        {visitedFlag.map((flag, index) => (
          <img
            style={{ width: "180px", marginRight: "10px" }}
            key={index}
            src={flag}
          ></img>
        ))}
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
