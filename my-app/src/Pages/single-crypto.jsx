import React from "react";
import { useParams } from "react-router-dom";
import { cryptoContainer } from "../Components/single-crypto-styled";

const fetchSingleCryptoData = async (inputId) => {
  const url = process.env.REACT_APP_BASE_URL;
  return fetch(`${url}/assets/${inputId}`).then((response) => response.json());
};

/////////////////

export const NewPage = () => {
  const [cryptoData, setCryptoData] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    console.log("Trigger");
    fetchSingleCryptoData(id)
      .then((data) => {
        console.log(data);
        setCryptoData(data || "no data found.");
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Cryptocurrency: {id} </h2>
      {cryptoData?.data &&
        Object.keys(cryptoData?.data)
          .filter((x) => x !== "explorer")
          .filter((x) => x !== "id")
          .filter((x) => x !== "rank")
          .map((key) => (
            <p>
              {key}: {cryptoData?.data[key]}
            </p>
          ))}
    </div>
  );
};
