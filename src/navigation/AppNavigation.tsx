import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ContentBlock from '../components/pages/ContentBlock/ContentBlock';
import BigPhoto from '../components/pages/BigPhoto/BigPhoto';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ContentBlock"
          component={ContentBlock}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BigPhoto"
          // @ts-ignore
          component={BigPhoto}
          options={{ headerShown: false }}
          initialParams={{ uri: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;