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
