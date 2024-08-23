import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageNav from "../components/PageNav";
import Product from "../pages/Product";
import Pricing from "../pages/pricing";
import Home from "../pages/home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Tracking from "../pages/Tracking";
import Logo from "../components/Logo";

import CityList from "../components/SideBar/CityList";
import CountryList from "../components/SideBar/CountryList";

const appNavs = [
  { to: "/", child: <Logo></Logo> },
  { to: "/product", child: "Product" },
  { to: "/pricing", child: "Pricing" },
  { to: "/login", child: "Log In", className: "cta " },
];

const flagemojiToPNG = (flag) => {
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

function App() {
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
    <div>
      <h1>This stays no matter which window you go to</h1>
      <BrowserRouter>
        <PageNav navs={appNavs} />

        <Routes>
          <Route index element={<Home></Home>} />
          <Route path="product" element={<Product></Product>} />
          <Route path="pricing" element={<Pricing></Pricing>} />
          <Route path="login" element={<Login></Login>} />
          <Route path="tracking" element={<Tracking></Tracking>}>
            <Route
              index
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="countries"
              element={
                <CountryList countries={countries} isLoading={isLoading} />
              }
            />
            <Route path="form" element={<p>Form</p>} />
          </Route>
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
