import Trybe from '../assets/Trybe.svg';
import Wallet from '../assets/Wallet.svg';
import Rectangle1 from '../assets/Rectangle1.svg';
import Rectangle2 from '../assets/Rectangle2.svg';
import emoji_money_with_wings_ from '../assets/emoji_money_with_wings_.svg';
import { Logo, LogoContainer, Name } from './LogoTrybeStyles';

function LogoTrybe() {
  return (
    <LogoContainer>
      <Logo>
        <img src={ Rectangle1 } alt="rectangle icon 1" />
        <img src={ Rectangle2 } alt="rectangle icon 2" />
        <img src={ emoji_money_with_wings_ } alt="emoji money with wings" />
      </Logo>
      <Name>
        <img src={ Trybe } alt="trybe icon" />
        <img src={ Wallet } alt="wallet icon" />
      </Name>
    </LogoContainer>
  );
}

export default LogoTrybe;
