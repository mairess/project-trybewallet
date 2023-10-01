import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type UserWallet = {
  user: {
    email: string,
    password: string,
  },
  wallet: {
    currencies: string[];
    expenses: object[];
    editor: boolean;
    idToEdit: number;
  }
};

export type Dispatch = ThunkDispatch<UserWallet, null, AnyAction>;
