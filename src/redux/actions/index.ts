// Coloque aqui suas actions
import { Dispatch } from '../../types';
import getCurrencies from '../../utils/fettchAPI';
import getExchangeRates from '../../utils/getExchangeRates';

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

type Expenses = {
  value: string,
  description: string;
  currency: string;
  method: string;
  tag: string;
};

type ExchangeRates = {
  [key: string]: {
    code: string,
    name: string,
    ask: string,
  }
};

// export const addExpense = (expense: Expenses) => ({
//   type: ADD_EXPENSE,
//   expense,
// });

export const addExpense = (expense: Expenses) => async (dispatch: Dispatch) => {
  try {
    const exchangeRates = await getExchangeRates();
    dispatch({
      type: ADD_EXPENSE,
      expense: {
        ...expense,
        exchangeRates,
      },
    });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const removeExpense = (id: number) => ({
  type: REMOVE_EXPENSE,
  id,
});

export const FETCH_CURRENCIES_REQUEST = 'FETCH_CURRENCIES_REQUEST';
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS';
export const FETCH_CURRENCIES_FAILURE = 'FETCH_CURRENCIES_FAILURE';

export const fetchCurrenciesrequest = () => ({
  type: FETCH_CURRENCIES_REQUEST,
});

export const fetchCurrenciesSuccess = (currencies: string[]) => ({
  type: FETCH_CURRENCIES_SUCCESS,
  currencies,
});

export const fetchCurrenciesFailure = (error: string) => ({
  type: FETCH_CURRENCIES_FAILURE,
  error,
});

export const fetchCurrencies = () => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchCurrenciesrequest());
    const currencies = await getCurrencies();
    dispatch(fetchCurrenciesSuccess(currencies));
  } catch (error: any) {
    dispatch(fetchCurrenciesFailure(error.message));
  }
};

export const FETCH_EXCHANGE_RATES_REQUEST = 'FETCH_EXCHANGE_RATES_REQUEST';
export const FETCH_EXCHANGE_RATES_SUCCESS = 'FETCH_EXCHANGE_RATES_SUCCESS';
export const FETCH_EXCHANGE_RATES_FAILURE = 'FETCH_EXCHANGE_RATES_FAILURE';

export const fetchExchangeRatesRequest = () => ({
  type: FETCH_EXCHANGE_RATES_REQUEST,
});

export const fetchExchangeRatesSuccess = (exchangeRates: ExchangeRates) => ({
  type: FETCH_EXCHANGE_RATES_SUCCESS,
  exchangeRates,
});

export const fetchExchangeRatesFailure = (error: string) => ({
  type: FETCH_EXCHANGE_RATES_FAILURE,
  error,
});

export const fetchExchangeRates = () => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchExchangeRatesRequest());
    const exchangeRates = await getExchangeRates();
    dispatch(fetchExchangeRatesSuccess(exchangeRates));
    console.log(exchangeRates);
  } catch (error: any) {
    dispatch(fetchExchangeRatesFailure(error.message));
  }
};
