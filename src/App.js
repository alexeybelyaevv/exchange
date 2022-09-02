import "./App.css";

import React, { useEffect, useState } from "react";

import { ExchangeCalculator } from "./Components/ExchangeCalculator";
import { ExchangeTable } from "./Components/ExchangeTable";
import { Header } from "./Components/Header";
import useAxios from "./hooks/useAxios";

function App() {
  const { response, loading } = useAxios();
  const [exchanges, setExchanges] = useState([]);
  const [eur, setEur] = useState(0);
  const [usd, setUsd] = useState(0);

  useEffect(() => {
    if (response !== null) {
      setExchanges(response);
      setUsd(response.find((currency) => currency.r030 === 840).rate);
      setEur(response.find((currency) => currency.r030 === 978).rate);
    }
  }, [response]);

  if (loading) return <div>Loading</div>;

  return (
    <div>
      <>
        <Header usd={usd} eur={eur} />
        <ExchangeCalculator currency={exchanges} />
        <ExchangeTable exchanges={exchanges} />
      </>
    </div>
  );
}

export default App;
