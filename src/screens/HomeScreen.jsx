"use client"

import { Button, SafeAreaView, Text, View } from "react-native";
import { styles } from "../styles/styles";
import { useState } from "react";
import SetGoalModal from "./SetGoalScreen";
import NavBar from "../components/NavBar";

export default function HomeScreen({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [goal, setGoal] = useState('');
  
    return (
      <SafeAreaView style={styles.container}>
                  <Text style={styles.header}>Expense Pro</Text>    
        <View>

          <Button title="Set Your Monthly Goal" onPress={() => setModalVisible(true)} />
          <SetGoalModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            goal={goal}
            setGoal={setGoal}
          />
        </View>
      </SafeAreaView>
    );
  };