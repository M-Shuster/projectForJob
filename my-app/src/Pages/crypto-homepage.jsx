import React from "react";
import { StyledLink } from "../Components/Link.styled";
import "../index.css";
import { CryptoComponent } from "../Components/cryptoComponent";

const fetchAllCryptoData = async () => {
  const url = process.env.REACT_APP_BASE_URL;
  return fetch(`${url}/assets`).then((response) => response.json());
};

export default function CryptoHomepage() {
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
    <div className="CryptoMainpageDiv">
      <h1>
        Welcome to the Cryptocurrency <StyledLink to="/">home</StyledLink>page{" "}
        <source />!
      </h1>
      <p>
        Please click on a cryptocurrency that you would like to see more
        information on
      </p>
      <div className="allCryptocurrenciesDivContainer">
        {cryptoData?.data?.map((crypto) => {
          return (
            <div className="allCryptocurrenciesDiv">
              <CryptoComponent crypto={crypto} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// export default React.memo(fetchAllCryptoData);
