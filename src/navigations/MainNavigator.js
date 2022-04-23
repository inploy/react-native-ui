import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OrderSummary from '../screens/OrderSummary';

const MainStack = createNativeStackNavigator();

const MainNavigator = props => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="OrderSummary" component={OrderSummary} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;