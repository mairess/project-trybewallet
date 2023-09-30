// Esse reducer será responsável por tratar as informações da pessoa usuária

import { UPDATE_EMAIL, UPDATE_PASSWORD } from '../actions';

type ActionType = { type: string, email: string, password: string };

const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    default:
      return state;
  }
}

export default user;
