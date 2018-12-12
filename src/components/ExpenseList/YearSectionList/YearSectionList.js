import React from 'react'
import {View} from 'react-native'

import MonthSectionList from '../MonthSectionList/MonthSectionList'


const YearSectionList = ({expenses}) => (
  <View>
    <MonthSectionList expenses={expenses} />
  </View>
)


export default YearSectionList
