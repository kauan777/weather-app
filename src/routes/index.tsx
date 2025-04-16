import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '@/screens/Home';
import {WeatherDetailsScreen} from '@/screens/WeatherDetails';

const Stack = createNativeStackNavigator();

export function Routes(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="WeatherDetails" component={WeatherDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
