import { useSelector } from 'react-redux';
import { UserWallet } from '../../types';
import { Form } from './LoginStyle';
import InputsForm from '../../components/InputsForm';
import LogiForm from '../../utils/formHandlers';

function Login() {
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailValue = useSelector((state: UserWallet) => state.user.email);
  const isValidForm = regEx.test(emailValue);

  const { password, handleEmailChange,
    handlePasswordChange, handleNavigate } = LogiForm();

  return (
    <Form>
      <InputsForm
        handleEmailChange={ handleEmailChange }
        handlePasswordChange={ handlePasswordChange }
        handleNavigate={ handleNavigate }
        isValidForm={ isValidForm && password.length >= 6 }
      />
    </Form>
  );
}

export default Login;
