import React from 'react'
import {ScrollView} from 'react-native'

import YearSectionList from './YearSectionList/YearSectionList'


class ExpenseList extends React.Component {
  
  componentDidMount = () => {
    this.props.getExpenses()
  }

  render() {

    const {expenses} = this.props

    return (
      <ScrollView>
        <YearSectionList expenses={expenses} />
      </ScrollView>
    )
  }
  
}


export default ExpenseList
