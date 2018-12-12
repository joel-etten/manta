import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import Colors from '../../constants/Colors'
import {normalize} from '../../helpers/normalize'


const ExpenseItem = ({expense}) => (
  <View style={styles.root}>
    <Text>Hello</Text>
  </View>
)

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.grey,
    borderRadius: normalize(3),
    height: normalize(50),
    marginLeft: '1%',
    width: '98%',
  },
})


export default ExpenseItem
