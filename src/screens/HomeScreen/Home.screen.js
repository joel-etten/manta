import React from 'react'
import {View, StyleSheet} from 'react-native'
import {LinearGradient} from 'expo'

import ExpenseList from '../../components/ExpenseList/ExpenseList.container'
import AddButton from '../../components/AddButton/AddButton'
import SearchBar from '../../components/SearchBar/SearchBar'
import BalanceSummary from '../../components/BalanceSummary/BalanceSummary'

import {normalize} from '../../helpers/normalize'
import Colors from '../../constants/Colors'

const balance = 200.43

const HomeScreen = () => (
  <View>
    <LinearGradient
      colors={balance >= 0 ? Colors.positiveGradient : Colors.negativeGradient}
      start={[0, 0.5]}
      end={[1, 0.5]}
      style={styles.headerContainer}
    >
      <BalanceSummary balance={balance} curentMonth='November' />
      <SearchBar placeholder='Search' />
    </LinearGradient>
    <ExpenseList />
    <AddButton />
  </View>
)

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: normalize(40),
    paddingBottom: normalize(20),
  },
})


export default HomeScreen
