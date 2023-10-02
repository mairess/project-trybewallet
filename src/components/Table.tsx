import { Container, TableData } from './styles/TableStyles';

function Table() {
  return (
    <Container>
      <TableData>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        <tr>
          <td>Descrição</td>
          <td>Tag</td>
          <td>Método de pagamento</td>
          <td>Valor</td>
          <td>Moeda</td>
          <td>Câmbio utilizado</td>
          <td>Valor convertido</td>
          <td>Moeda de conversão</td>
          <td>Editar/Excluir</td>
        </tr>
      </TableData>
    </Container>
  );
}

export default Table;
