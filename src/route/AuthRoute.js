// In AuthRoute.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screen/login';

const Stack = createNativeStackNavigator();

function AuthRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthRoute;
