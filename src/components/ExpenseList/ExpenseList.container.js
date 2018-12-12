import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import ExpenseListComponent from './ExpenseList.component'

import {getExpenses} from '../../actions/Expenses/ExpensesActions'


const mapStateToProps = (state) => ({
  expenses: state.expenses.list,
})

const mapDispatchToProps = (dispatch) => ({
  getExpenses: bindActionCreators(getExpenses, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListComponent)
