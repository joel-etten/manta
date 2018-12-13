import React from 'react'
import {View, StyleSheet} from 'react-native'

import DateIcon from '../DateIcon/DateIcon'
import Typography from '../Typography/Typography'

import {normalize} from '../../helpers/normalize'
import Colors from '../../constants/Colors'


const ExpenseItem = ({expense}) => (
  <View
    style={expense.amount >= 0
      ? {...styles.rootStyles, ...styles.rootPositive}
      : {...styles.rootStyles, ...styles.rootNegative}}
  >
    <DateIcon date='18' />
    <View>
      <Typography>{expense.time.format()}</Typography>
      <Typography>{expense.description}</Typography>
    </View>
    <Typography>{expense.amount}</Typography>
  </View>
)
 
const styles = StyleSheet.create({
  rootStyles: {
    alignItems: 'center',
    borderRadius: normalize(3),
    flexDirection: 'row',
    height: normalize(50),
    justifyContent: 'space-between',
    marginTop: normalize(7),
    marginLeft: '2%',
    shadowColor: Colors.shadowGreyLight,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      height: normalize(5),
    },
    width: '96%',
  },
  rootPositive: {
    backgroundColor: Colors.softGreen,
  },
  rootNegative: {
    backgroundColor: Colors.softRed,
  },
})


export default ExpenseItem
