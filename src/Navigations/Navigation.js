import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Auth from '../Screens/Auth';
import LoginSignUpPage from '../Screens/LoginSignUpPage';
import Abc from '../Screens/Abc';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  const config = {
    screens: {
      Home: 'Home',
      Auth: 'Auth',
    },
  };

  const linking = {
    prefixes: ['https://webApp.com', 'webApp://'],
    config,
  };

  return (
    <NavigationContainer linking={linking}>
      {/* <NavigationContainer> */}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginSignUpPage" component={LoginSignUpPage} />
        <Stack.Screen name="Abc" component={Abc} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Auth" component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
