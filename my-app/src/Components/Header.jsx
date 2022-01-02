import React from "react";
import { StyledHeader } from "./Header.styled";
import { MainTitle } from "./Titles";

export const Header = () => {
    return (
        <StyledHeader>
            <MainTitle text = "Hello There"/>
        </StyledHeader>
    );
};