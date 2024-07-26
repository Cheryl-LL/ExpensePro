'use client';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { deleteAllEntry, loadAllEntry, loadEntry } from '../utilities/DataStorage';
import { styles } from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Activities({ navigation }) {
  const preloadEntry = loadAllEntry();
  const [entries, setEntries] = useState(preloadEntry);

  useEffect(() => {
    const allEntries = loadAllEntry();
    setEntries(allEntries);
  }, []);

  const ListRenderer = ({ item }) => {
    // Ensure date is a Date object
    const entryDate = new Date(item.date);
    const isIncome = item.type;
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.date}>{entryDate.toLocaleDateString()}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={[styles.amount, isIncome === 'income' ? styles.income : styles.expense]}>
          ${item.amount.toFixed(2)}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <Text style={styles.header}>Activities</Text>
      <Button title='reset log (temporary button)' onPress={deleteAllEntry} />
      {entries.length !== 0 ? (
        <FlatList
          data={entries}
          renderItem={ListRenderer}
          keyExtractor={(item) => item.id}
        />
      ) : null}
    </SafeAreaView>
  );
}