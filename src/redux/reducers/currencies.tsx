import {
  FETCH_CURRENCIES_SUCCESS,
  FETCH_CURRENCIES_FAILURE,
} from '../actions/currenciesActions';

type ActionType = { type: string, currencies: string[], error: string };

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
    editor: '',
    idToEdit: '',
  },
};

function currency(state = INITIAL_STATE, action: ActionType) {
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

    default:
      return state;
  }
}

export default currency;
