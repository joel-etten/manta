import React from 'react'
import {View, StyleSheet} from 'react-native'

import Typography from '../Typography/Typography'

import Colors from '../../constants/Colors'
import {normalize} from '../../helpers/normalize'


const BalanceSummary = ({balance, curentMonth}) => (
  <View style={styles.root}>
    <Typography style={styles.month}>{curentMonth}</Typography>
    <Typography style={styles.balance}>{balance}</Typography>
  </View>
)

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  month: {
    color: Colors.grey,
    marginBottom: normalize(10),
  },
  balance: {
    color: Colors.white,
    fontSize: normalize(30),
  },
})


export default BalanceSummary
