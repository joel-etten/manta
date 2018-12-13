import React from 'react'
import {View, StyleSheet} from 'react-native'

import ExpenseList from '../../components/ExpenseList/ExpenseList.container'
import AddButton from '../../components/AddButton/AddButton'
import SearchBar from '../../components/SearchBar/SearchBar'

import {normalize} from '../../helpers/normalize'


const HomeScreen = () => (
  <View>
    <View style={styles.headerContainer}>
      <SearchBar placeholder='Search' />
      <AddButton />
    </View>
    <ExpenseList />
  </View>
)

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: normalize(50),
  },
})


export default HomeScreen
