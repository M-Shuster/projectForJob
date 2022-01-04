import React from "react";

export const CryptoComponentName = ({ crypto: { id } }) => {
  return <option>{id}</option>;
};
