import React from "react";
// import WeatherData from "./WeatherData";
import Country from "./Country";
import CountryDetail from "./CountryDetail";


const Countries = ({ countries, weatherData, handleClick }) => {
  if (countries.length > 10) {
    return (
      <div>
        <span>Too many matches, specify another filter.</span>
      </div>
    );
  } else if (countries.length > 1 && countries.length < 10) {
    return (
      <div>
        {countries.map(country => (
          <Country
            key={country.name}
            country={country}
            handleClick={handleClick}
          />
        ))}
      </div>
    );
  } else if (countries.length === 1) {
    return (
      <div>
        {countries.map(country => (
          <CountryDetail key={country.name} country={country} />
        ))}

      {/*<WeatherData weatherData={weatherData} /> */}
      </div>
    );
  } else {
    return <></>
  }
};

export default Countries
