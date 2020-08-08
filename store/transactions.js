export const MODULE_NAME = 'transactions';
export const getTransactions = (state) => state[MODULE_NAME].transactions;

const initialState = {
  transactions: [
    {
      id: 1,
      name: 'Aykhan',
      surname: 'Hajiyev',
      transactionValue: 1300.5,
      paymentDate: '08 Aug 2020',
      type: 'Debt',
      payWith: 'Credit Account',
      imgUrl: 'https://aykhanhajiyev.com/assets/transaction_user_img/user3.jpg',
    },
    {
        id: 2,
        name: 'Ada',
        surname: 'PeaceLover',
        transactionValue: 992.52,
        paymentDate: '06 Aug 2020',
        type: 'Debt',
        payWith: 'Cash',
        imgUrl: 'https://aykhanhajiyev.com/assets/transaction_user_img/user2.jpg',
      },
      {
        id: 3,
        name: 'Mark',
        surname: 'Zumbercerk',
        transactionValue: 1236.36,
        paymentDate: '01 Aug 2020',
        type: 'Debt',
        payWith: 'Credit Account',
        imgUrl: 'https://aykhanhajiyev.com/assets/transaction_user_img/user1.jpg',
      },
      
  ],
};

export function reducer(state = initialState, {type, payload}) {
  switch (type) {
    default:
      return state;
  }
}
