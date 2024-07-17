import React, {useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SetGoalScreen from './src/screens/SetGoalScreen';
import { styles } from './src/styles/styles';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Set Goal" component={SetGoalScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}



export default App;
