import React, { useEffect, useState } from "react";

export const ExchangeCalculator = ({ currency }) => {
  const [topValue, setTopValue] = useState();
  const [bottomValue, setBottomValue] = useState();
  const [topRate, setTopRate] = useState(1);
  const [bottomRate, setBottomRate] = useState(1);

  const format = (number) => {
    return number.toFixed(4);
  };

  const changedValue = (position, value) => {
    if (position === "top") {
      setBottomValue(format((Number(value) * topRate) / bottomRate));
      setTopValue(Number(value));
    } else {
      setTopValue(format((Number(value) * bottomRate) / topRate));
      setBottomValue(Number(value));
    }
  };

  const changedRate = (position, value) => {
    if (position === "top") {
      setTopValue(format((Number(bottomValue) / value) * bottomRate));
      setBottomRate(value);
    } else {
      setBottomValue(format((Number(topValue) / value) * topRate));
      setTopRate(value);
    }
  };

  return (
    <div id="exchange">
      <div className="row">
        <select
          onChange={(e) => {
            changedRate("top", e.target.value);
          }}
        >
          <option value={1}>Гривня</option>
          {currency.map((item, key) => {
            return (
              <option value={item.rate} key={key + "select1"}>
                {item.txt}
              </option>
            );
          })}
        </select>
        <input
          value={topValue}
          onInput={(e) => {
            changedValue("top", e.target.value.replace(/\D/g, ""));
          }}
        ></input>
      </div>
      <div className="row">
        <select
          onChange={(e) => {
            changedRate("bottom", e.target.value);
          }}
        >
          <option value={1}>Гривня</option>
          {currency.map((item, key) => {
            return (
              <option value={item.rate} key={key + "select2"}>
                {item.txt}
              </option>
            );
          })}
        </select>
        <input
          value={bottomValue}
          onInput={(e) => {
            changedValue("bottom", e.target.value.replace(/\D/g, ""));
          }}
        ></input>
      </div>
    </div>
  );
};
