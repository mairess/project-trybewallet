import { useSelector } from 'react-redux';
import { UserWallet } from '../types';

function TotalExpensesComponent() {
  const expenses = useSelector((state: UserWallet) => state.wallet.expenses);

  const total = expenses.reduce((acc, expense) => {
    const exechangeRate = parseFloat(expense.exchangeRates[expense.currency].ask);
    return acc + (parseFloat(expense.value) * exechangeRate);
  }, 0);

  return (
    <span>{total.toFixed(2)}</span>
  );
}

export default TotalExpensesComponent;
