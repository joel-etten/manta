import React from 'react'
import {View, StyleSheet} from 'react-native'

import Typography from '../Typography/Typography'

import {normalize} from '../../helpers/normalize'
import Colors from '../../constants/Colors'


const DateIcon = ({date}) => (
  <View style={styles.root}>
    <Typography style={styles.text}>{date}</Typography>
  </View>
)

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: Colors.lightBlue,
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
  text: {
    color: Colors.blue,
  },
})


export default DateIcon
