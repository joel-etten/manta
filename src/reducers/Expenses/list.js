import moment from 'moment'
import {GET_EXPENSES, SUCCESS} from '../../constants/Actions'


const INITIAL_STATE = [
  {
    description: 'Babas Kitchen',
    amount: -4,
    currency: 'EUR',
    time: moment(),
  },
  {
    description: 'Babas Kitchen',
    amount: -4,
    currency: 'EUR',
    time: moment(),
  },
  {
    description: 'Babas Kitchen',
    amount: -4,
    currency: 'EUR',
    time: moment(),
  },
  {
    description: 'Babas Kitchen',
    amount: -4,
    currency: 'EUR',
    time: moment(),
  },
]


export default (state = INITIAL_STATE, action) => {
  if (!GET_EXPENSES) {
    return state
  }

  switch (action.name) {
    case SUCCESS:
      return action.payload
    default:
      return state
  }
}
