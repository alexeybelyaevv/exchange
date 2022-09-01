import React, { useEffect, useState } from "react";

export const ExchangeCalculator = ({ currency }) => {
  const [leftValue, setLeftValue] = React.useState("0.00");
  const [rightValue, setRightValue] = React.useState("0.00");
  const [leftRate, setLeftRate] = React.useState(1);
  const [rightRate, setRightRate] = React.useState(1);

  //Get exchange rate data from API

  //If either rate changes, recalculate right input value
  useEffect(() => {
    let currencyIn = leftValue;
    let currencyOut = CalculateExchange(
      currencyIn,
      leftRate,
      rightRate
    ).toFixed(2);
    setRightValue(currencyOut);
  }, [leftRate, rightRate]);

  //If either input changes, recalculate opposite input value
  const HandleInput = (event) => {
    const currencyIn = event.target.value == "." ? "0." : event.target.value;
    if (isNaN(currencyIn)) {
      return;
    }

    const isLeft = event.target.id == "leftValue";

    const [rateIn, rateOut] = isLeft
      ? [leftRate, rightRate]
      : [rightRate, leftRate];
    const currencyOut = CalculateExchange(currencyIn, rateIn, rateOut).toFixed(
      2
    );

    const [leftOutput, rightOutput] = isLeft
      ? [currencyIn, currencyOut]
      : [currencyOut, currencyIn];
    setLeftValue(leftOutput);
    setRightValue(rightOutput);
  };

  const HandleLeftSelect = (event) => {
    setLeftRate(event.target.value);
  };

  const HandleRightSelect = (event) => {
    setRightRate(event.target.value);
  };

  const HandleFocus = (event) => {
    event.target.select();
  };

  const CalculateExchange = (currencyIn, rateIn, rateOut) => {
    return (currencyIn / rateIn) * rateOut;
  };

  return (
    <div id="exchange">
      <div class="row">
        <select id="leftSelect" onChange={HandleLeftSelect}>
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
          id="leftValue"
          value={leftValue}
          onInput={HandleInput}
          onFocus={HandleFocus}
        ></input>
      </div>
      <div class="row">
        <select id="rightSelect" onChange={HandleRightSelect}>
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
          id="rightValue"
          value={rightValue}
          onInput={HandleInput}
          onFocus={HandleFocus}
        ></input>
      </div>
    </div>
  );
};
