"use client"

import { Button, SafeAreaView, Text, View } from "react-native";
import { styles } from "../styles/styles";
import { useEffect, useState } from "react";
import SetGoalModal from "./SetGoalModal";
import NavBar from "../components/NavBar";
import { deleteAllEntry, loadGoals } from '../utilities/DataStorage';

export default function HomeScreen({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [goal, setGoal] = useState('');
    const [currentGoal, setCurrentGoal] = useState(null);

    useEffect(() => {
      const goalsData = loadGoals();
      const currentMonth = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
      setCurrentGoal(goalsData[currentMonth] || null);
    }, [modalVisible]);
  
    return (
      <SafeAreaView style={styles.container}>
                  <Text style={styles.header}>Expense Pro</Text>    
        <View>

          <Button title="Set Monthly Goal" onPress={() => setModalVisible(true)} />
          <SetGoalModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            goal={goal}
            setGoal={setGoal}
          />
        </View>
        <View style={styles.goalContainer}>
        <Text style={styles.goalHeader}>Current Monthly Goal</Text>
        {currentGoal ? (
          <Text style={styles.goalText}>${currentGoal}</Text>
        ) : (
          <Text style={styles.goalText}>No goal set for this month.</Text>
        )}
      </View>
        {/* Test Nav, remove after nav component is done */}
        <Button title="New Entry" onPress={()=>(navigation.navigate('NewEntry'))}/>
        <Button title="Activities" onPress={()=>(navigation.navigate('Activities'))}/>
        <Button title='reset log (temporary button)' onPress={deleteAllEntry} />
      </SafeAreaView>
    );
  };