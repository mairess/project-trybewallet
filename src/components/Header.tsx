import { useSelector } from 'react-redux';
import { UserWallet } from '../types';

function Header() {
  const emailState = useSelector((state: UserWallet) => state.user.email);

  return (
    <header>
      <p data-testid="email-field">{emailState}</p>
      <p data-testid="total-field">0</p>
      <p data-testid="header-currency-field">BRL</p>

    </header>
  );
}

export default Header;
