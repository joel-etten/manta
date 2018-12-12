import React from 'react'
import {View} from 'react-native'

import YearSectionList from './YearSectionList/YearSectionList'


class ExpenseList extends React.Component {
  
  componentDidMount = () => {
    this.props.getExpenses()
  }

  render() {

    const {expenses} = this.props

    return (
      <View>
        <YearSectionList expenses={expenses} />
      </View>
    )
  }
  
}


export default ExpenseList
