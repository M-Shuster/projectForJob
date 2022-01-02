import React from "react";
import { Link } from "react-router-dom";

export const CryptoComponent = ({ crypto: { id, symbol } }) => {
  return (
    <Link to={`/single-crypto/${id}`}>
      <div
        className="cryptoDivMainpage"
        style={{
          margin: 10,
          borderRadius: 10,
          backgroundColor: "goldenrod",
          padding: 10,
          display: "flex",
          width: "20%",
        }}
      >
        <h6>{id + "/"}</h6>
        <h6>{symbol}</h6>
      </div>
    </Link>
  );
};
