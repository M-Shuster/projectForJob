import styled from "styled-components"

export const YesButton = styled.button `
background-color: Green;
text-color: black;
font-size: 16px;
padding: 10px 30px;
border-radius: 10px;
margin: 10px 0px;
cursor: pointer;
`;

export const NoButton = styled.button `
background-color: Red;
text-color: Black;
font-size: 16px;
padding: 10px 30px;
border-radius: 10px;
margin: 10px 0px;
cursor: pointer;
`;

export const ButtonGroup = styled.div`
display:flex;
justify-content: center;
gap: 25px;
`;