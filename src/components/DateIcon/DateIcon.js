import React from 'react'
import {View, StyleSheet} from 'react-native'

import Typography from '../Typography/Typography'

import {normalize} from '../../helpers/normalize'
import Colors from '../../constants/Colors'


const DateIcon = ({date}) => (
  <View style={styles.root}>
    <Typography>{date}</Typography>
  </View>
)

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: Colors.grey,
    borderRadius: normalize(15),
    height: normalize(30),
    justifyContent: 'center',
    shadowColor: Colors.shadowGreyLight,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      height: normalize(5),
    },
    width: normalize(30),
  },
})


export default DateIcon
