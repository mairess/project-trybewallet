// Coloque aqui suas actions

export const UPDATE_EMAIL = 'UPDATE_EMAIL';

export const updateEmail = (email: string) => ({
  type: UPDATE_EMAIL,
  email,
});

export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

export const updatePassword = (password: string) => ({
  type: UPDATE_PASSWORD,
  password,
});
