const API = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencies = async () => {
  const reponse = await fetch(API);
  const data = await reponse.json();
  delete data.USDT;
  const currencies = Object.keys(data);

  return currencies;
};

export default getCurrencies;
