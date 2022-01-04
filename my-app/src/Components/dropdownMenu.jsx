import React from "react";
import "../index.css";
import { CryptoComponentName } from "./cryptoComponentNameOnly";

const fetchAllCryptoData = async () => {
  const url = process.env.REACT_APP_BASE_URL;
  return fetch(`${url}/assets`).then((response) => response.json());
};

export default function CryptoDropdown() {
  const [cryptoData, setCryptoData] = React.useState();

  React.useEffect(() => {
    if (!cryptoData) {
      console.log("Trigger");
      fetchAllCryptoData()
        .then((data) => {
          console.log(data);
          setCryptoData(data || "no data found.");
        })
        .catch(console.error);
    }
  }, [cryptoData]);

  return (
    <div>
      <select>
        {cryptoData?.data?.map((crypto) => {
          return <CryptoComponentName crypto={crypto} />;
        })}
      </select>
    </div>
  );
}
