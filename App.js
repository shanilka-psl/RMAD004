import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationRouts} from './src/common/enum';
import Screen_01 from './src/23_OCT_2022/Screen_01';
import Screen_02 from './src/23_OCT_2022/Screen_02';

//creating a stack navigator
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NavigationRouts.SCREEN_01}>
        <Stack.Screen
          name={NavigationRouts.SCREEN_01}
          component={Screen_01}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRouts.SCREEN_02}
          component={Screen_02}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
