import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { updateEmail, updatePassword } from '../../redux/actions';
import { UserWallet } from '../../types';
import { Form } from './LoginStyle';
import InputsForm from '../../components/InputsForm';

function Login() {
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailValue = useSelector((state: UserWallet) => state.user.email);
  const isValidForm = regEx.test(emailValue) && password.length >= 6;
  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateEmail(event.target.value));
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleNavigate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(updatePassword(password));
    navigate('/carteira');
  };

  return (
    <Form>
      <InputsForm
        handleEmailChange={ handleEmailChange }
        handlePasswordChange={ handlePasswordChange }
        handleNavigate={ handleNavigate }
        isValidForm={ isValidForm }
      />
    </Form>
  );
}

export default Login;
