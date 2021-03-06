import {createStackNavigator} from 'react-navigation'

import Home from '../screens/HomeScreen'
import AddExpense from '../screens/AddExpense/AddExpense'


export default createStackNavigator({
  Home,
  AddExpense,
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
})
