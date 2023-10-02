import styled from 'styled-components';

export const HeaderContainer = styled.header`
width: 64.813em;
height: 30.125em;
flex-shrink: 0;

margin-top: -465px; //review this 'gambiarra'

border-radius: 0.625rem;
background: #FFF;
box-shadow: -0.25rem 0.563rem 0.813rem 0 rgba(5, 18, 54, 0.40);
`;

export const ExpensesContainer = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
padding: 1.875rem 0;
`;
export const TotalExpenses = styled.div`
width: 14.563rem;
display: flex;
justify-content: space-evenly;
align-items: center;

color: #003BE5;
font-family: Epilogue;
font-size: 0.875rem;
font-style: normal;
font-weight: 700;
line-height: normal;

span {
color: #003BE5;
font-family: Epilogue;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`;

export const Profiel = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;

width: 9.813rem;
height: 1.576rem;
flex-shrink: 0;

color: #2FC18C;
font-family: Epilogue;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;

img {
width: 1.578rem;
height: 1.576rem;
flex-shrink: 0;
fill: #2FC18C;
}
`;
