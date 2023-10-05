import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { renderWithRouterAndRedux } from '../helpers/renderWith';
import Wallet from '../../pages/Wallet';
import Table from '../../components/Table';
import WalletForm from '../../components/WalletForm';
import getExchangeRates from '../../utils/getExchangeRates';
import App from '../../App';
import { fetchExchangeRates } from '../../redux/actions';

const user = userEvent.setup();
const adicionarDespensa = 'Adicionar despesa';

describe('Testa comportamento da página de login', () => {
  test('se existe os inputs de email e senha e também um botão para logar', async () => {
    renderWithRouterAndRedux(<Wallet />);

    const description = screen.getByLabelText('Descrição');
    const value = screen.getByLabelText('Valor');
    const BtnAdd = screen.getByRole('button', { name: adicionarDespensa });

    await user.type(description, 'aluguel');
    await user.type(value, '150');
    await user.click(BtnAdd);
  });

  test('Verifica se existe os inputs de email e senha e também um botão para logar', async () => {
    renderWithRouterAndRedux(<WalletForm />);
    const addBtn = screen.getByRole('button', { name: adicionarDespensa });
    await user.click(addBtn);
    renderWithRouterAndRedux(<Table />);
  });

  test('Testa chamada da API para recuperar moedas', async () => {
    renderWithRouterAndRedux(<WalletForm />);
    const addExpenseBtn = screen.getByRole('button', { name: adicionarDespensa });

    let rates = getExchangeRates;
    rates = vi.fn();
    await user.click(addExpenseBtn);
    rates();
    expect(rates).toHaveBeenCalled();
  });

  test('Verifica se chamou fetchCurrencies ', async () => {
    renderWithRouterAndRedux(<App />);
    const EmailInput = screen.getByTestId('email-input');
    const PasswordInput = screen.getByTestId('password-input');
    const EnterBtn = screen.getByRole('button', { name: 'Entrar' });

    await user.type(EmailInput, 'testando@test.com');
    await user.type(PasswordInput, 'fakepassword');
    await user.click(EnterBtn);

    const description = screen.getByTestId('description-input');
    const value = screen.getByTestId('value-input');

    await user.type(description, 'aluguel');
    await user.type(value, '350');

    const addBtn = screen.getByText(adicionarDespensa);

    let exchangeRates = fetchExchangeRates;
    exchangeRates = vi.fn();
    await user.click(addBtn);

    exchangeRates();
    expect(exchangeRates).toHaveBeenCalled();
    const removeBtn = await screen.findByAltText('Button Remove');
    await user.click(removeBtn);
  });

  test('Testa a chamada de fetchExchangeRates', async () => {
    renderWithRouterAndRedux(<Wallet />);
    const addExpenseBtn = screen.getByRole('button', { name: adicionarDespensa });

    await user.click(addExpenseBtn);
  });
});
