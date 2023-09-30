import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { updateEmail, updatePassword } from '../redux/actions';

function LogiForm() {
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
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

  return {
    password,
    handleEmailChange,
    handlePasswordChange,
    handleNavigate,
  };
}

export default LogiForm;
