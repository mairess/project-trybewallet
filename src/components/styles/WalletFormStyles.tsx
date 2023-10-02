import styled from 'styled-components';

export const Container = styled.div`
padding:  5px 0;
display: flex;
justify-content: center;
align-items: center;

width: 1037px;
height: 134px;
flex-shrink: 0;
background: rgba(225, 229, 235, 0.49);
`;

export const FormExpenses = styled.form`
display: flex;

width: 820px;
height: 87px;
flex-shrink: 0;
`;

export const Button = styled.button`
position: absolute;
margin-left: 250px;
margin-top: 180px;
width: 330px;
height: 40px;
flex-shrink: 0;

border-radius: 5px;
border: 1px solid #2FC18C;
background: #2FC18C;

color: #FFF;
text-align: center;
font-family: Epilogue;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;

cursor: pointer;
`;
