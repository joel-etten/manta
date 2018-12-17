import React from 'react'
import {View, StyleSheet} from 'react-native'

import DateIcon from '../DateIcon/DateIcon'
import Typography from '../Typography/Typography'

import {normalize} from '../../helpers/normalize'
import Colors from '../../constants/Colors'


const ExpenseItem = ({expense}) => (
  <View
    style={styles.rootStyles}
  >
    <DateIcon date='18' />
    <View>
      <Typography>{expense.time.format()}</Typography>
      <Typography>{expense.description}</Typography>
    </View>
    <Typography
      style={expense.amount >= 0
        ? styles.amountPositive
        : styles.amountNegative
      }
    >{expense.amount}€
    </Typography>
  </View>
)
 
const styles = StyleSheet.create({
  rootStyles: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: normalize(3),
    flexDirection: 'row',
    height: normalize(60),
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
  amountPositive: {
    color: Colors.green,
  },
  amountNegative: {
    color: Colors.red,
  },
})


export default ExpenseItem
