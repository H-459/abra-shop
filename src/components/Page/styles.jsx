import styled from "styled-components";

export const gridParent = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: 2fr repeat(4, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;`


export const productFlexWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width:70%;
    grid-area: 2 / 1 / 6 / 5;
   
`;

export const cart = styled.div` grid-area: 2 / 5 / 6 / 6; `

export const productFlexItem = styled.div`
    border: 1px solid green;
   width: 15%;
  margin-left: 24px;
  margin-bottom:48px;
`;

