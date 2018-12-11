const INITIAL_STATE = [
  {
    name: 'Adyen NV',
    stockSymbol: 'ADYEN',
    amount: 4,
    currentPrice: 656.8,
    percentageChange: 2.4,
    type: 'negative',
  },
  {
    name: 'Apple Inc.',
    stockSymbol: 'APPL',
    amount: 1,
    currentPrice: 45.29,
    percentageChange: 17.2,
    type: 'positive',
  },
  {
    name: 'Tesla Inc',
    stockSymbol: 'TSLA',
    amount: 2,
    currentPrice: 56.8,
    percentageChange: 2.4,
    type: 'negative',
  },
  {
    name: 'Tesla Inc 3',
    stockSymbol: 'TSLA',
    amount: 2,
    currentPrice: 56.8,
    percentageChange: 2.4,
    type: 'negative',
  },
  {
    name: 'Tesla Inc 4',
    stockSymbol: 'TSLA',
    amount: 2,
    currentPrice: 56.8,
    percentageChange: 2.4,
    type: 'negative',
  },
]

export default (state = INITIAL_STATE) => {
  return state
}
