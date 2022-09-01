import React from "react";

export const Header = ({ usd, eur }) => {
  return (
    <div className="header">
      <h3>Обмінник</h3>
      <div className="headerCurrency">
        <h4>Американський Доллар: {usd}</h4>
        <h4>Євро: {eur}</h4>
      </div>
    </div>
  );
};
