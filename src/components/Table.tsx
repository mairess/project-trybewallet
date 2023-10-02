import { useSelector, useDispatch } from 'react-redux';
import { Container, TableData, Button } from './styles/TableStyles';
import { UserWallet } from '../types';
import { removeExpense } from '../redux/actions';
import RemoveBtnIcon from '../assets/RemoveBtnIcon.svg';

function Table() {
  const dispatch = useDispatch();
  const expenses = useSelector((state: UserWallet) => state.wallet.expenses);

  const handleRemove = (id: number) => {
    dispatch(removeExpense(id));
  };
  return (
    <Container>
      <TableData>
        <thead>
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
        </thead>
        <tbody>
          {expenses.map((espense) => (
            <tr key={ espense.id }>
              <td>{espense.description}</td>
              <td>{espense.tag}</td>
              <td>{espense.method}</td>
              <td>{parseFloat(espense.value).toFixed(2)}</td>
              <td>{`${espense.exchangeRates[espense.currency].name}`}</td>
              <td>
                {parseFloat(espense.exchangeRates[espense.currency].ask)
                  .toFixed(2)}
              </td>
              <td>
                {(parseFloat(espense.value)
                  * parseFloat(espense.exchangeRates[espense.currency].ask)).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <Button
                  onClick={ () => handleRemove(espense.id) }
                  data-testid="delete-btn"
                >
                  <img src={ RemoveBtnIcon } alt="Button Remove" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </TableData>
    </Container>
  );
}

export default Table;
