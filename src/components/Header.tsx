import { useSelector } from 'react-redux';
import { UserWallet } from '../types';
import LogoTrybe from './LogoTrybe';
import Moedas from '../assets/Moedas.svg';
import Vector from '../assets/Vector.svg';
import { HeaderContainer, ExpensesContainer, TotalExpenses,
  Profiel } from './styles/HeadreStyles';
import TotalExpensesComponent from '../utils/countExpenses';
import WalletForm from './WalletForm';

function Header() {
  const emailState = useSelector((state: UserWallet) => state.user.email);

  return (
    <HeaderContainer>
      <ExpensesContainer>
        <LogoTrybe />
        <TotalExpenses>
          <img src={ Moedas } alt="icon coins" />
          Total de despesas:
          <span data-testid="total-field">
            <TotalExpensesComponent />
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </TotalExpenses>
        <Profiel data-testid="email-field">
          <img src={ Vector } alt="profiel" />
          {emailState}
        </Profiel>
      </ExpensesContainer>
      <WalletForm />
    </HeaderContainer>
  );
}

export default Header;
