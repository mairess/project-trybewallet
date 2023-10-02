import styled from 'styled-components';

export const Container = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;

select {
    color: #003BE5;
    font-family: Epilogue;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-left: 5px;
}

input {
    color: #003BE5;
    font-family: Epilogue;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

label {
    color: #003BE5;
    font-family: Epilogue;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
`;

export const Tag = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 500px;
    height: 30px;
    flex-shrink: 0;

select {
    width: 155px;
    height: 30px;
    flex-shrink: 0;

    border-radius: 5px;
    border: 1px solid #003BE5;
}
`;

export const Method = styled.div`
    width: 300px;
    height: 30px;
    flex-shrink: 0;

select {
    width: 228px;
    height: 30px;
    flex-shrink: 0;

    border-radius: 5px;
    border: 1px solid #003BE5;
}`;

export const Currency = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 155px;
    height: 30px;
    flex-shrink: 0;

select {
    width: 91px;
    height: 30px;
    flex-shrink: 0;

    border-radius: 5px;
    border: 1px solid #003BE5;
}
`;

export const WrapperToWorkAround = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
`;
