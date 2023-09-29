import styled from 'styled-components';

const Form = styled.form`
display: flex;
flex-direction: column;
flex-shrink: 0;
border: 1px solid red;
border-radius: 0.3125rem;
width: 20.625rem;
height: 8.75rem;
`;

function Login() {
  return (
    <Form>
      <input
        data-testid="email-input"
        type="email"
        placeholder="E-mail"
        name=""
        id=""
      />
      <input
        data-testid="password-input"
        type="text"
        placeholder="Senha"
      />
      <button>Entrar</button>
    </Form>
  );
}

export default Login;
