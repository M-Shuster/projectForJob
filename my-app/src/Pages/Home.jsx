import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import '../App.css';
import { Link } from "react-router-dom"
import {DescriptionText} from '../Components/Description'
import { ButtonGroup, NoButton, YesButton } from '../Components/Button.styled';

export function Home() {

  return (
    <div className="Home">
      <Header />
      <DescriptionText/>
    <ButtonGroup>
      <Link to="/cryptocurrencies">
        <YesButton> Yes </YesButton>
      </Link>
      <Link to="/dead-end">
        <NoButton> No </NoButton>
      </Link>
    </ButtonGroup>
      <Footer />
    </div>
  )
}

// return(
//       {/* <h3>Cryptocurrency Names</h3> */}
//       <button onClick={FetchCryptoData}>Fetch Cryptocurrency data</button>
//       {cryptoData && (
//         <ul>
//           {cryptoData.map(cryptocurrency => (
//             <li key={cryptocurrency.data.id}>{cryptocurrency.data.name}</li>
//           ))}
//           </ul>