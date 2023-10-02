import styled from 'styled-components';
import Header from '../components/Header';
import Table from '../components/Table';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

function Wallet() {
  return (
    <Container>
      <Header />
      <Table />
    </Container>
  );
}

export default Wallet;
