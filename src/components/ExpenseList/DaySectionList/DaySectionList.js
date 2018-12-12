import React from 'react'
import {View} from 'react-native'
import ExpenseItem from '../../ExpenseItem/ExpenseItem'


const DaySectionList = ({expenses}) => (
  <View>
    {
      expenses.map((expense, index) => (
        <ExpenseItem expense={expense} key={index} />
      ))
    }
  </View>
)


export default DaySectionList
