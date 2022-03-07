// In MainRoute.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/home';
import {Catalog, Outlet} from '../screen';

const Stack = createNativeStackNavigator();

const listScreenMain = [
  {
    name: 'Home',
    screen: Home,
  },
  {
    name: 'Outlet',
    screen: Outlet,
  },
  {
    name: 'Catalog',
    screen: Catalog,
  },
];

function MainRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {listScreenMain.map((Data, index) => {
          return (
            <Stack.Screen
              key={index}
              options={{
                headerShown: false,
                animation: 'slide_from_right',
              }}
              name={Data.name}
              component={Data.screen}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainRoute;
