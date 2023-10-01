const API = 'https://economia.awesomeapi.com.br/json/all';

const getExchangeRates = async () => {
  const reponse = await fetch(API);
  const data = await reponse.json();
  delete data.USDT;
  const currencies = data;
  return currencies;
};

export default getExchangeRates;
