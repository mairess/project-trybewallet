// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
import { UPDATE_EMAIL, UPDATE_PASSWORD } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
  wallet: {
    currencies: '',
    expenses: '',
    editor: '',
    idToEdit: '',
  },
};

type ActionType = { type: string, email: string, password: string };

function userReducer(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case UPDATE_EMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email,
        },
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        user: {
          ...state.user,
          password: action.password,
        },
      };
    default:
      return state;
  }
}

export default userReducer;
