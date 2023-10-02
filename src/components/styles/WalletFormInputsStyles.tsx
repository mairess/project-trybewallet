import styled from 'styled-components';

export const Container = styled.div`
border: 1px solid blue;
width: 380px;
height: 87px;

display: flex;
flex-direction: column;
justify-content: space-between;

label {
  color: #003BE5;
  font-family: Epilogue;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

}

input {
  border-radius: 5px;
  border: 1px solid #003BE5;

  margin-left: 5px;
}
`;

export const Description = styled.div`
  width: 350px;
  height: 30px;
  flex-shrink: 0;

input {
  width: 270.86px;
  height: 30px;
  flex-shrink: 0;
}
`;

export const Value = styled.div`
  width: 201px;
  height: 30px;
  flex-shrink: 0;

input {
  width: 158px;
  height: 30px;
  flex-shrink: 0;
}
`;
