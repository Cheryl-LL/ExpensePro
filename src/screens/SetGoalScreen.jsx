import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native';
import { styles } from '../styles/styles';

const SetGoalScreen = () => {
  const [goal, setGoal] = useState('');

  const handleSetGoal = () => {
    alert(`Monthly goal set to $${goal}`);
    setGoal('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Monthly Goal</Text>
      <Text style={styles.subtitle}>You can set your monthly deposit goal here and ExpensePro will help you track!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your goal amount"
        keyboardType="numeric"
        value={goal}
        onChangeText={setGoal}
      />
      <Button title="Set Goal" onPress={handleSetGoal} />
    </View>
  );
};



export default SetGoalScreen;