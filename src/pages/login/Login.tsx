import { useSelector } from 'react-redux';
import { UserWallet } from '../../types';
import { Form, Contanier, Logo, LogoContainer, Name } from './LoginStyle';
import InputsForm from '../../components/InputsForm';
import LogiForm from '../../utils/formHandlers';
import Trybe from '../../assets/Trybe.svg';
import Wallet from '../../assets/Wallet.svg';
import Rectangle1 from '../../assets/Rectangle1.svg';
import Rectangle2 from '../../assets/Rectangle2.svg';
import emoji_money_with_wings_ from '../../assets/emoji_money_with_wings_.svg';

function Login() {
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailValue = useSelector((state: UserWallet) => state.user.email);
  const isValidForm = regEx.test(emailValue);

  const { password, handleEmailChange,
    handlePasswordChange, handleNavigate } = LogiForm();

  return (
    <Contanier>
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
      <Form>
        <InputsForm
          handleEmailChange={ handleEmailChange }
          handlePasswordChange={ handlePasswordChange }
          handleNavigate={ handleNavigate }
          isValidForm={ isValidForm && password.length >= 6 }
        />
      </Form>
    </Contanier>
  );
}

export default Login;
