import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';
import {styles} from '../styles/styles';
import { setGoal as saveGoalToStorage } from '../utilities/DataStorage';

const SetGoalModal = ({ modalVisible, setModalVisible, goal, setGoal }) => {
  const [month, setMonth] = useState(
    new Date().toLocaleDateString('en-US', {month: 'long', year: 'numeric'}),
  );

  const handleSetGoal = () => {
    saveGoalToStorage(month, goal);
    Alert.alert(`Monthly goal set to $${goal}`);
    setGoal('');
    setModalVisible(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.centerView}>
        <View style={styles.modalView}>
          <Text style={styles.header}>Set Monthly Goal</Text>
          <Text style={styles.description}>
            You can set your monthly deposit goal here and ExpensePro will help
            you track!
          </Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter your goal amount"
            value={goal}
            onChangeText={setGoal}
          />
          <View style={styles.buttonContainer}>
            <Button title="Set Goal" onPress={handleSetGoal} color="#007BFF" />
            <Button
              title="Cancel"
              onPress={() => setModalVisible(false)}
              color="#FF0000"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SetGoalModal;
