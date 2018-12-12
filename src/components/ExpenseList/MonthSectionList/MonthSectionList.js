import React from 'react'
import {View} from 'react-native'

import DaySectionList from '../DaySectionList/DaySectionList'


const MonthSectionList = ({expenses}) => (
  <View>
    <DaySectionList expenses={expenses} />
  </View>
)


export default MonthSectionList
