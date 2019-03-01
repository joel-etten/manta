import {createAction} from '../../helpers/ActionHelper'
import * as ACTIONS from '../../constants/Actions'


export const getExpenses = () => createAction(ACTIONS.GET_EXPENSES)
