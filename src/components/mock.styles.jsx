import styled from "styled-components";

export const parent = styled.div` display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
`

export const header_div1 = styled.div `  grid-area: 1 / 1 / 2 / 6;  `
export const product_div2 = styled.div `grid-area: 2 / 1 / 6 / 5; `
export const cart_div3 = styled.div `grid-area: 2 / 5 / 6 / 6; `


