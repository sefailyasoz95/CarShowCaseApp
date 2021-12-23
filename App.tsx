import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import AppStack from './src/Stacks/AppStack';

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
      <StatusBar barStyle="light-content" />
    </NavigationContainer>
  );
};

export default App;
