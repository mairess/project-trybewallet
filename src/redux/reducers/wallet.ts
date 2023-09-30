// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { ADD_EXPENSE, REMOVE_EXPENSE } from '../actions';

type ActionType = { type: string, expense: object };

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: '',
  idToEdit: '',
};

function wallet(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.expense],
      };
    case REMOVE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense !== action.expense),
      };
    default:
      return state;
  }
}

export default wallet;
