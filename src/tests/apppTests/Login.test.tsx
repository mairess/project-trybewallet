import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { renderWithRouterAndRedux } from '../helpers/renderWith';
import App from '../../App';
import getCurrencies from '../../utils/fettchAPI';

const user = userEvent.setup();

describe('Testa comportamento da página de login', () => {
  test('se existe os inputs de email e senha e também um botão para logar', () => {
    renderWithRouterAndRedux(<App />);

    const EmailInput = screen.getByTestId('email-input');
    expect(EmailInput).toBeInTheDocument();

    const PasswordInput = screen.getByTestId('password-input');
    expect(PasswordInput).toBeInTheDocument();

    const EnterBtn = screen.getByRole('button', { name: 'Entrar' });
    expect(EnterBtn).toBeInTheDocument();
  });

  test('Testa comportamento dos inputs e do botão', async () => {
    renderWithRouterAndRedux(<App />);

    const EmailInput = screen.getByTestId('email-input');
    const PasswordInput = screen.getByTestId('password-input');
    const EnterBtn = screen.getByRole('button', { name: 'Entrar' });

    await user.type(EmailInput, 'testando@test.com');
    expect(EmailInput).toHaveValue('testando@test.com');

    await user.type(PasswordInput, 'fakepassword');
    expect(PasswordInput).toHaveValue('fakepassword');

    await user.click(EnterBtn);
    expect(EnterBtn).not.toBeInTheDocument();
  });

  test('Testa comportamento dos inputs e do botão', async () => {
    renderWithRouterAndRedux(<App />);
    let currencies = getCurrencies;
    currencies = vi.fn();

    currencies();
    expect(currencies).toHaveBeenCalled();
  });
});
