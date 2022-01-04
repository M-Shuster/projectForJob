import React from "react";
import { Link } from "react-router-dom";

export const CryptoComponent = ({ crypto: { id, symbol } }) => {
  return (
    <Link to={`/single-crypto/${id}`}>
      <h6>{id}</h6>
      <h6>{symbol}</h6>
    </Link>
  );
};
