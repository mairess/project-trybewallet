import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  position: absolute;

  width: 1155px;
  height: 464px;
  flex-shrink: 0;

  border-radius: 10px;
  background: #003BE5;
  box-shadow: -4px 9px 13px 0px rgba(3, 107, 82, 0.30);

  color: #FFF;
    text-align: center;
    font-family: Epilogue;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 13px; /* 108.333% */
`;

export const TableData = styled.table`
  width: 1040px;
  height: 129px;
  flex-shrink: 0;
th {
  color: #FFF;
  border-right: 1px solid white;
  
  &:last-child {
    border-right: none;
  }
  border-bottom: 1px solid white;
}

td {
  color: #2FC18C;
  text-align: center;
  font-family: Epilogue;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 13px; /* 108.333% */
}
`;

export const Button = styled.button`
background: none;
border: none;
cursor: pointer;
`;
