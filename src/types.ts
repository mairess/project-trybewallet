import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

type Expense = {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
  exchangeRates: {
    [key: string]: {
      code: string,
      name: string,
      ask: string,
    }
  },
};

export type UserWallet = {
  user: {
    email: string,
    password: string,
  },
  wallet: {
    currencies: string[];
    expenses: Expense[];
    editor: boolean;
    idToEdit: number;
  }
};

export type Dispatch = ThunkDispatch<UserWallet, null, AnyAction>;
