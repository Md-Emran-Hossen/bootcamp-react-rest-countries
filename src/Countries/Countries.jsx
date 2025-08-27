import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    // console.log("Country Visited", country);

    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  //   console.log(visitedCountries);
  

  const handleDeleteVisitedCountries = (country) => {
    // console.log("Delete Triggered");

    const deleteVisitedCountries = visitedCountries.filter(
      (visitedCountry) => visitedCountry.cca3 !== country.cca3
    );
    setVisitedCountries(deleteVisitedCountries);
  };

  useEffect(() => {
      fetch("/src/resources/countriesv3_1.json")
   // fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
    //   .then((data)=> console.log("Country API FOUND",data))
   .then((data) => setCountries(data))
  ;
  }, []);

  return (
    <div>
      
      <h3>Total Countries: {countries.length}</h3>
      {visitedCountries.map((country) => (
        <li key={country.cca3}>
          {country.name.common} &nbsp;&nbsp;&nbsp;
          <button
            onClick={() => handleDeleteVisitedCountries(country)}
            style={{ marginTop: 10 }}
          >
            Delete
          </button>
        </li>
      ))}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.alpha2Code}
            handleVisitedCountries={handleVisitedCountries}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
