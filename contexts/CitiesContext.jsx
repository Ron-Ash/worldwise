import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const CitiesContext = createContext();

const flagemojiToPNG = (flag) => {
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      setIsLoading(true);
      var data = [];
      try {
        const res = await fetch("http://localhost:8000/cities");
        data = await res.json();
      } catch (err) {
        console.log(err.message);
      }
      const processedData = data.map((city) => {
        return { ...city, emoji: flagemojiToPNG(city.emoji) };
      });
      setCities(processedData);
      setCountries(
        processedData.reduce(
          (acc, city) =>
            acc.map((c) => c.country).includes(city.country)
              ? acc
              : [...acc, { country: city.country, emoji: city.emoji }],
          []
        )
      );
      setIsLoading(false);
    }
    fetchCities();
  }, []);
  return (
    <CitiesContext.Provider value={{ cities, countries, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  return context;
}

CitiesProvider.propTypes = {
  children: PropTypes.any,
};

export { CitiesProvider, useCities };
