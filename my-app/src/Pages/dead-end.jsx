import React from 'react'
import { StyledLink } from "../Components/Link.styled"

export default function DeadEnd() {
    return (
        <div>
            That's pretty boring, guess you're stuck here now.
            No going <StyledLink to="/">home!</StyledLink>
        </div>
    )
}