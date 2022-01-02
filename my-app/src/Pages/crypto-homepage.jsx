import React from 'react'
import {FetchAPI} from "../API/FetchAPI";
import { StyledLink } from "../Components/Link.styled"

export default function CryptoHomepage() {
    return (
        <div>
            <h1>Welcome to the Cryptocurrency <StyledLink to="/">home</StyledLink>page!</h1>
            {FetchAPI}
        </div>
        
    )
}