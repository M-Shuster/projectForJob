import { useEffect, useState } from "react";


export function FetchAPI(){
    const url = ("https://fathomless-river-17067.herokuapp.com/https://api.coincap.io/v2/assets");
    const [cryptoData, setCryptoData] = useState("");

    useEffect(() => {
        FetchAPI().then((apiData) =>{
            setCryptoData(apiData || 'no data found.')
        })
    }, [])

    fetch(url)
    .then(({data}) => {
        console.log(data);
        return JSON.stringify(data);
    })
    .catch(error => console.log(error))
};