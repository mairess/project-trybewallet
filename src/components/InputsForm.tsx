type InputsFormProps = {
  handleEmailChange:(event: React.ChangeEvent<HTMLInputElement>) => void,
  handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleNavigate: (event: React.MouseEvent<HTMLButtonElement>) => void,
  isValidForm: boolean,
};

function InputsForm({ handleEmailChange, handlePasswordChange,
  handleNavigate, isValidForm }: InputsFormProps) {
  return (
    <>
      <input
        data-testid="email-input"
        type="email"
        placeholder="E-mail"
        onChange={ handleEmailChange }
      />

      <input
        data-testid="password-input"
        type="password"
        placeholder="Senha"
        onChange={ (handlePasswordChange) }
      />

      <button
        type="submit"
        disabled={ !isValidForm }
        onClick={ handleNavigate }
      >
        Entrar
      </button>
    </>
  );
}

export default InputsForm;
