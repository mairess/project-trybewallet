// Coloque aqui suas actions

export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const updateEmail = (email: string) => ({
  type: UPDATE_EMAIL,
  email,
});

export const updatePassword = (password: string) => ({
  type: UPDATE_PASSWORD,
  password,
});

export const addExpense = (expense: object) => ({
  type: ADD_EXPENSE,
  expense,
});

export const removeExpense = (id: number) => ({
  type: REMOVE_EXPENSE,
  id,
});
