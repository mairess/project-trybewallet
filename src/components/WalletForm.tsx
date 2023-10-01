import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FormExpenses } from './WalletFormStyles';
import { fetchCurrencies } from '../redux/actions';
import { Dispatch, UserWallet } from '../types';

function WalletForm() {
  const dispatch: Dispatch = useDispatch();
  const currencies = useSelector((state: UserWallet) => state.wallet.currencies);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  return (
    <FormExpenses action="">
      <label htmlFor="value-input">
        Valor:
        <input
          id="value-input"
          data-testid="value-input"
          type="number"
        />
      </label>
      <label htmlFor="description-input">
        Descrição:
        <input
          id="description-input"
          data-testid="description-input"
          type="text"
        />
      </label>
      <label htmlFor="currency-input">Moeda:</label>
      <select
        data-testid="currency-input"
        id="currency-input"
      >
        {currencies.map((currency: string) => (
          <option key={ currency } value={ currency }>{currency}</option>
        ))}
      </select>
      <label htmlFor="method-input">Método de pagamento:</label>
      <select
        data-testid="method-input"
        id="method-input"
      >
        <option value="">Dinheiro</option>
        <option value="">Cartão de crédito</option>
        <option value="">Cartão de débito</option>
      </select>
      <label htmlFor="tag-input">Categoria:</label>
      <select
        data-testid="tag-input"
        id="tag-input"
      >
        <option value="">Alimentação</option>
        <option value="">Lazer</option>
        <option value="">Trabalho</option>
        <option value="">Transporte</option>
        <option value="">Saúde</option>
      </select>
      <button>
        Adicionar despesa
      </button>
    </FormExpenses>
  );
}

export default WalletForm;

// Note que os campos `<select>` já iniciam com um valor selecionado em seu navegador. Você também pode verificar por meio do React Developer Tools se o estado de seu componente inicializa de modo sincronizado com o que é exibido no navegador.

// Para ilustrar, imagine que o estado inicial seja uma string vazia. Nesse caso, a pessoa usuária poderá facilmente causar um problema onde ela acredita que a opção já está selecionada (uma vez que o select mostra um valor), quando na verdade ela ainda não está (o estado foi inicializado com uma string vazia). Por esse motivo, é importante sincronizar o mesmo valor inicial do `<select>` em seu estado no React, em vez de inicializar com uma string vazia.
