import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import CryptoDropdown from "../Components/dropdownMenu";

const fetchSingleCryptoData = async (inputId) => {
  const url = process.env.REACT_APP_BASE_URL;
  return fetch(`${url}/assets/${inputId}`).then((response) => response.json());
};

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
    <div className="cryptoDivContainer">
      <div className="singleCryptoDiv">
        <h2>Cryptocurrency: {id} </h2>
        {cryptoData?.data &&
          Object.keys(cryptoData?.data)
            .filter((x) => x !== "explorer")
            .filter((x) => x !== "id")
            .filter((x) => x !== "rank")
            .filter((x) => x !== "name")
            .map((key) => (
              <p>
                {key}: {cryptoData?.data[key]}
              </p>
            ))}

        <br />
        <Link to="/cryptocurrencies">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          Back
        </Link>
      </div>
      <div className="compareCryptoDiv">
        <Link to={"/comparisons"}>Compare with another Cryptocurrency?</Link>
        <br />
      </div>
      <br />
    </div>
  );
};
