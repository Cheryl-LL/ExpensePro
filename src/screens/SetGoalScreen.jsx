import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from "../styles/styles";

const SetGoalModal = ({ modalVisible, setModalVisible, goal, setGoal }) => {
  const handleSetGoal = () => {
    Alert.alert(`Monthly goal set to $${goal}`);
    setGoal('');
    setModalVisible(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.centerView}>
        <View style={styles.modalView}>
          <Text style={styles.header}>Set Monthly Goal</Text>
          <Text style={styles.description}>
            You can set your monthly deposit goal here and ExpensePro will help you track!
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
            <Button title="Cancel" onPress={() => setModalVisible(false)} color="#FF0000" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SetGoalModal;