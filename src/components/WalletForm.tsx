import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { FormExpenses } from './WalletFormStyles';
import { addExpense, fetchCurrencies } from '../redux/actions';
import { Dispatch, UserWallet } from '../types';
import WalletFormInputs from './WalletFormInputs';
import WalletFormSelects from './WalletFormSelects';

function WalletForm() {
  const dispatch: Dispatch = useDispatch();
  const currencies = useSelector((state: UserWallet) => state.wallet.currencies);
  const initialValues = {
    value: '',
    description: '',
    currency: currencies ? currencies[0] : '',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  const [formValues, setFormsValues] = useState(initialValues);

  useEffect(() => {
    if (currencies) {
      setFormsValues((prevValues) => ({
        ...prevValues,
        currency: currencies[0],
      }));
    }
  }, [currencies]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement
  | HTMLSelectElement>) => {
    setFormsValues((prevValues) => ({
      ...prevValues,
      [event.target.id]: event.target.value,
    }));
  };

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(addExpense(formValues));
    setFormsValues(initialValues);
  };

  return (
    <FormExpenses onSubmit={ handleSubmit }>
      <WalletFormInputs
        onChange={ handleChange }
        values={ formValues }
      />
      <WalletFormSelects
        onChange={ handleChange }
        values={ formValues }
      />
      <button>
        Adicionar despesa
      </button>
    </FormExpenses>
  );
}

export default WalletForm;
