import React from 'react'
import {TouchableOpacity, Image, StyleSheet} from 'react-native'

import Icons from '../../constants/Icons'
import {normalize} from '../../helpers/normalize'
import Colors from '../../constants/Colors'


const AddButton = ({onPress}) => (
  <TouchableOpacity style={styles.root} onPress={onPress}>
    <Image source={Icons.add} style={styles.addIcon} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: Colors.lightBlue,
    height: normalize(40),
    justifyContent: 'center',
    marginTop: normalize(20),
    marginBottom: normalize(20),
    width: '100%',
  },
  addIcon: {
    height: normalize(15),
    width: normalize(15),
  },
})


export default AddButton
