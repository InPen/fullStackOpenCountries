import React, { useState, useEffect } from "react";
import axios from "axios";
//components
import InputField from "./components/InputField";
import Countries from "./components/Countries";

const App = (props) => {
//search is an empty string. setSearch is a function used to update search
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
// why null and not [] like countries?
  const [weatherData, setWeatherData] = useState(null)

//GET country data from api
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(countriesResponse => {
        if (search !== "") {
          const searchResult = countriesResponse.data.filter(country =>
          country.name.toLowerCase().includes(search.toLowerCase()))
          setCountries(searchResult)
        }
      })
  }, [search])

// GET weather info from api
  useEffect(() => {
    const baseUrl = "http://api.weatherstack.com/current";
    const ACCESS_KEY = process.env.REACT_APP_API_KEY;
    if (countries.length === 1) {
      const capital = countries.map(country => country.capital);
      if (capital[0]) {
        axios
          .get(`${baseUrl}?access_key=${ACCESS_KEY}&query=${capital[0]}`)
          .then(response => {
            setWeatherData(response.data);
          });
      }
    }
  }, [countries]);

  const handleSearchChange = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }
  const handleClick = (countryName) => {
    setSearch(countryName)
  }

  return (
    <main className="App">
      {/* Search for country data by name */}
      <InputField
        htmlFor="search"
        type="text"
        label="Find countries"
        value={search}
        onChange={handleSearchChange}
      />
      <Countries
        handleClick={handleClick}
        countries={countries}
        weatherData={weatherData}
      />
    </main>
  );
};

export default App;
