import React from 'react'
import { StyledLink } from "../Components/Link.styled"
import '../index.css';
import { CryptoComponent } from '../Components/cryptoComponent';


const fetchAllCryptoData = async () => {
    const url = process.env.REACT_APP_BASE_URL
    return fetch(`${url}/assets`).then(response => response.json())
};

export default function CryptoHomepage() {
    const [cryptoData, setCryptoData] = React.useState(); 

    React.useEffect(() => {
        if(!cryptoData){
            console.log('Trigger')
            fetchAllCryptoData().then((data) =>{
                console.log(data)
                setCryptoData(data || 'no data found.')
            }).catch(console.error)
        }
    }, [cryptoData])

    return (
        <div>
            <h1>Welcome to the Cryptocurrency <StyledLink to="/">home</StyledLink>page <source />!</h1>
                {cryptoData?.data?.map((crypto) => {
                    return <CryptoComponent crypto={crypto} />
                })}
        </div>
        
    )
}

