import React from 'react'
import {View, TextInput, Image, StyleSheet} from 'react-native'

import {normalize} from '../../helpers/normalize'
import Colors from '../../constants/Colors'
import Icons from '../../constants/Icons'


const SearchBar = ({onChangeText, value, placeholder}) => (
  <View style={styles.root}>
    <View style={styles.inputContainer}>
      <Image source={Icons.search} style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
    </View>
  </View>
)

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.white,
    borderRadius: normalize(17.25),
    fontSize: normalize(20),
    height: normalize(35),
    margin: 'auto',
    marginLeft: '7,5%',
    justifyContent: 'center',
    paddingLeft: normalize(15),
    paddingRight: normalize(15),
    shadowColor: Colors.shadowGreyDark,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      height: normalize(5),
    },
    width: '85%',
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    fontSize: normalize(18),
    marginLeft: normalize(10),
  },
  searchIcon: {
    width: normalize(15),
    height: normalize(15),
  },
})


export default SearchBar
