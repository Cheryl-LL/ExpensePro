  import React, {useState} from 'react';
  import {
    Alert,
    Button,
    FlatList,
    Image,
    Modal,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from 'react-native';
  import HomeScreen from './src/screens/HomeScreen';
  import NewEntry from './src/screens/NewEntry';
  import Activities from './src/screens/Activities';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import SetGoalModal from './src/screens/SetGoalModal';
  import NavBar from './src/components/NavBar';

  const Stack = createNativeStackNavigator();

  function App(): React.JSX.Element {
    return (
      <SafeAreaView style={{ flex: 1 }} >
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewEntry" component={NewEntry} />
        <Stack.Screen name="Activities" component={Activities} />
      </Stack.Navigator>
      <NavBar />
    </NavigationContainer>
      </SafeAreaView>
    );
  }



  export default App;
