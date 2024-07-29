"use client"

import React, { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView, Text, View, TouchableOpacity, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { styles } from "../styles/styles";
import SetGoalModal from "./SetGoalModal";
import { loadGoals, loadAllEntry } from '../utilities/DataStorage';

const screenWidth = Dimensions.get("window").width;

export default function HomeScreen({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [goal, setGoal] = useState('');
    const [currentGoal, setCurrentGoal] = useState(null);
    const [monthlyExpense, setMonthlyExpense] = useState(0);
    const [monthlyIncome, setMonthlyIncome] = useState(0);
    const [categoryData, setCategoryData] = useState([]);

    const loadData = useCallback(async () => {
      const goalsData = await loadGoals();
      const currentMonth = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
      setCurrentGoal(goalsData[currentMonth] || null);

      const allEntries = await loadAllEntry();
      calculateMonthlyTotals(allEntries);
      calculateCategoryPercentages(allEntries);
  }, []);

      useFocusEffect(
          useCallback(() => {
              loadData();
          }, [loadData])
      );


    const calculateMonthlyTotals = (entries) => {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();

      const monthlyTotals = entries.reduce((acc, entry) => {
          const entryDate = new Date(entry.date);
          if (entryDate.getMonth() === currentMonth && entryDate.getFullYear() === currentYear) {
              if (entry.type === 'income') {
                  acc.income += entry.amount;
              } else {
                  acc.expense += entry.amount;
              }
          }
          return acc;
      }, { income: 0, expense: 0 });

      setMonthlyIncome(monthlyTotals.income);
      setMonthlyExpense(monthlyTotals.expense);
  };


    const calculateCategoryPercentages = (entries) => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        const categoryTotals = entries.reduce((acc, entry) => {
            const entryDate = new Date(entry.date);
            if (entryDate.getMonth() === currentMonth && entryDate.getFullYear() === currentYear && entry.type === 'expense') {
                acc[entry.category] = (acc[entry.category] || 0) + entry.amount;
            }
            return acc;
        }, {});

        const totalExpense = Object.values(categoryTotals).reduce((sum, value) => sum + value, 0);

        const categoryPercentages = Object.entries(categoryTotals).map(([category, amount]) => ({
            name: category,
            population: amount,
            color: getRandomColor(),
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }));

        console.log('Calculated Category Percentages:', categoryPercentages);
        setCategoryData(categoryPercentages);
    };

    const getRandomColor = () => {
        return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    };

    const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientTo: "#fff",
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2,
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.topText}>Expense: ${monthlyExpense.toFixed(2)}</Text>
                <Text style={styles.topText}>Income: ${monthlyIncome.toFixed(2)}</Text>
            </View>
            
            <Text style={styles.header}>Expense Pro</Text>
            
            <View style={styles.chartContainer}>
                {categoryData.length > 0 ? (
                    <PieChart
                        data={categoryData}
                        width={screenWidth - 20}
                        height={220}
                        chartConfig={chartConfig}
                        accessor={"population"}
                        backgroundColor={"transparent"}
                        paddingLeft={"15"}
                        center={[10, 0]}
                        absolute
                    />
                ) : (
                    <Text>No data available</Text>
                )}
            </View>

            <View style={styles.goalContainer}>
                <Text style={styles.goalHeader}>Current Monthly Goal</Text>
                {currentGoal ? (
                    <Text style={styles.goalText}>${currentGoal}</Text>
                ) : (
                    <Text style={styles.goalText}>No goal set for this month.</Text>
                )}
            </View>

            <TouchableOpacity style={styles.setGoalButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.setGoalButtonText}>Set Monthly Goal</Text>
            </TouchableOpacity>

            <SetGoalModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                goal={goal}
                setGoal={setGoal}
            />
        </SafeAreaView>
    );
}
