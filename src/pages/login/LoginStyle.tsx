import styled from 'styled-components';

export const Contanier = styled.div`
width: 32.813rem;
height: 22.25rem;
border-radius: 0.625rem;
background: #FFF;
box-shadow: -0.25rem 0.563rem 0.813rem, 0 rgba(3, 107, 82, 0.30);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
flex-shrink: 0;
border-radius: 0.3125rem;
width: 20.625rem;
height: 8.75rem;

button {
border-radius: 0.313rem;
border: 0.063rem solid #003BE5;
background: #003BE5;

width: 20.625rem;
height: 2.5rem;
flex-shrink: 0;

color: #FFF;
text-align: center;
font-family: Epilogue;
font-size: 0.875rem;
font-style: normal;
font-weight: 700;
line-height: normal;
cursor: pointer;
}

input {
width: 20.625rem;
height: 2.5rem;
flex-shrink: 0;
padding: 0 0.625rem;
margin: 0.625rem 0;

border-radius: 0.313rem;
border: 0.063rem solid #003BE5;
background: #FFF;

color: #003BE5;
font-family: Epilogue;
font-size: 0.875rem,;
font-style: normal;
font-weight: 400;
line-height: normal;
}

input::placeholder {
    color: #003BE5;
}
`;

export const LogoContainer = styled.div`
display: flex;
align-items: center;
width: 16.788rem;
height: 3.509rem;
`;

export const Logo = styled.div`
position: relative;
height: 3.157rem;
width: 3.157rem;
margin: 0 0.5rem;

img:nth-of-type(1)  {
position: absolute;
width: 3.157rem;
height: 3.157rem;
}

img:nth-of-type(2)  {
position: absolute;
bottom: 0rem;
left: 0.9rem;
width: 2.28rem;
height: 2.456rem;
}

img:nth-of-type(3)  {
position: absolute;
bottom: 0.1rem;
right : 0.01rem;
width: 3.469rem;
height: 3.469rem;
}
`;

export const Name = styled.div`
display: flex;
align-items: center;

img:nth-of-type(1) {
    width: 5.368rem;
    height: 2.112rem;
}
img:nth-of-type(2) {
    width: 7.01rem;
    height: 1.672rem;
}
`;
