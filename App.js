import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationRouts} from './src/common/enum';
import SampleData from './src/06_NOV_2022/SampleData';

//creating a stack navigator
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NavigationRouts.SCREEN_01}>
        <Stack.Screen
          name={NavigationRouts.SAMPLE}
          component={SampleData}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
