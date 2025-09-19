import React, { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  // console.log(country)

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited && "bg-visited"}`}>
      <img
        src={country.country.flags.flags.png}
        alt={country.country.flags.flags.alt}
      />
      <h3>Name : {country.country.name.common} </h3>
      <p>Population : {country.country.population.population} </p>
      <p>
        Area : {country.country.area.area}
        {" ➡️"}
        {country.country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
<h3>Name : </h3>;
