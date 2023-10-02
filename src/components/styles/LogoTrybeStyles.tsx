import styled from 'styled-components';

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
