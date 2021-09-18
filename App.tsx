import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main, ViewTasks } from './screens/index';

const Stack = createNativeStackNavigator();


const App: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main' screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name='Main' component={Main} />
        <Stack.Screen name='ViewTasks' component={ViewTasks} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;


