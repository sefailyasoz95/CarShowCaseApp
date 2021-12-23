import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import DetailScreen from '../Screens/DetailScreen';
import HomeScreen from '../Screens/HomeScreen';
interface Props {}
const App = createSharedElementStackNavigator();
const AppStack = (props: Props) => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <App.Screen name="Home" component={HomeScreen} />
      <App.Screen name="Detail" component={DetailScreen} />
    </App.Navigator>
  );
};

export default AppStack;
