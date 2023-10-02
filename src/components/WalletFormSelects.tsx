import { useSelector } from 'react-redux';
import { UserWallet } from '../types';
import { Container, Tag, Method, Currency,
  WrapperToWorkAround } from './styles/WalletFormSelectsStyles';

type WalletFormSelectsProps = {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  values: { currency: string; method: string; tag: string };
};

function WalletFormSelects({ onChange, values }: WalletFormSelectsProps) {
  const currencies = useSelector((state: UserWallet) => state.wallet.currencies);
  return (
    <Container>
      <Tag>
        <label htmlFor="tag">Categoria</label>
        <select
          data-testid="tag-input"
          id="tag"
          onChange={ onChange }
          value={ values.tag }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </Tag>

      <WrapperToWorkAround>
        <Method>
          <label htmlFor="method">Método</label>
          <select
            data-testid="method-input"
            id="method"
            onChange={ onChange }
            value={ values.method }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </Method>

        <Currency>
          <label htmlFor="currency">Moeda</label>
          <select
            data-testid="currency-input"
            id="currency"
            onChange={ onChange }
            value={ values.currency }
          >
            {Array.isArray(currencies) ? (
              currencies.map((currency) => (
                <option key={ currency } value={ currency }>{currency}</option>
              ))
            ) : (
              <option value="">Loading...</option>
            )}
          </select>
        </Currency>
      </WrapperToWorkAround>
    </Container>
  );
}

export default WalletFormSelects;
