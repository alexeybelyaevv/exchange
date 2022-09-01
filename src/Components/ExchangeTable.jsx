import React from "react";

export const ExchangeTable = ({ exchanges }) => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <table>
        <tr>
          <td>Валюта</td>
          <td>Ціна</td>
        </tr>
        {exchanges.map((item, key) => {
          return (
            <tr key={key + "tr"}>
              <td>{item.txt}</td>
              <td>{item.rate.toFixed(2)} ГРН</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
