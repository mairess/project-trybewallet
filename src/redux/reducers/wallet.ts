// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import {
  ADD_EXPENSE, REMOVE_EXPENSE, FETCH_CURRENCIES_SUCCESS,
  FETCH_CURRENCIES_FAILURE,
} from '../actions';

type ExchangeRates = {
  [key: string]: {
    code: string,
    name: string,
    ask: string,
  }
};

type Expense = {
  id?: number,
  value: string,
  description: string;
  currency: string;
  method: string;
  tag: string;
  exchangeRates?: ExchangeRates,
};

type ActionType = {
  type: string,
  currencies: string[],
  error: string,
  expense: Expense,
  exchangeRates?: ExchangeRates,
};

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: '',
  idToEdit: '',
};

function wallet(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case FETCH_CURRENCIES_SUCCESS:
      return {
        ...state,
        currencies: action.currencies,
        error: '',
      };
    case FETCH_CURRENCIES_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [
          ...state.expenses,
          {
            id: state.expenses.length > 0
              ? ((state.expenses[state.expenses.length - 1] as Expense)?.id ?? 0) + 1 : 0,
            ...action.expense,
          },
        ],
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
