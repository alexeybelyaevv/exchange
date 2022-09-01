import "./App.css";

import React, { useEffect, useState } from "react";

import { ExchangeCalculator } from "./Components/ExchangeCalculator";
import { ExchangeTable } from "./Components/ExchangeTable";
import { Header } from "./Components/Header";
import axios from "axios";
import logo from "./logo.svg";

function App() {
  const [usd, setUsd] = useState(0);
  const [eur, setEur] = useState(0);
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    axios
      .get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((response) => {
        setExchanges(response.data);
        setUsd(
          response.data
            .find((currency) => currency.r030 === 840)
            .rate.toFixed(2)
        );
        setEur(
          response.data
            .find((currency) => currency.r030 === 978)
            .rate.toFixed(2)
        );
      });
  }, []);

  return (
    <div>
      <Header usd={usd} eur={eur} />
      <ExchangeCalculator currency={exchanges} />
      <ExchangeTable exchanges={exchanges} />
    </div>
  );
}

export default App;
