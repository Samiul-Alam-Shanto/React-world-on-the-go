import React, { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  // console.log(country)

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };
  return (
    <div className={`country ${visited && "bg-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name : {country.name.common} </h3>
      <p>Population : {country.population.population} </p>
      <p>
        Area : {country.area.area}
        {" ➡️"}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button onClick={() => handleVisitedFlag(country.flags.flags.png)}>
        Add Visited Flag
      </button>
    </div>
  );
};

export default Country;
<h3>Name : </h3>;
