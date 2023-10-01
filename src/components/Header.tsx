import { useSelector } from 'react-redux';
import { UserWallet } from '../types';
import LogoTrybe from './LogoTrybe';
import Moedas from '../assets/Moedas.svg';
import Vector from '../assets/Vector.svg';
import { HeaderContainer, ExpensesContainer, TotalExpenses,
  Profiel } from './HeadreStyles';
import TotalExpensesComponent from '../utils/countExpenses';

function Header() {
  const emailState = useSelector((state: UserWallet) => state.user.email);

  return (
    <HeaderContainer>
      <ExpensesContainer data-testid="total-field">
        <LogoTrybe />
        <TotalExpenses>
          <img src={ Moedas } alt="icon coins" />
          Total de despesas:
          <span data-testid="header-currency-field">
            <TotalExpensesComponent />
          </span>
        </TotalExpenses>
        <Profiel data-testid="email-field">
          <img src={ Vector } alt="profiel" />
          {emailState}
        </Profiel>
      </ExpensesContainer>
    </HeaderContainer>
  );
}

export default Header;
