'use client';
import {useState} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {getNextId, loadEntry, saveEntry} from '../utilities/DataStorage';
import DatePicker from 'react-native-date-picker';
import {styles} from '../styles/styles';

const categoryOptions = [
  {label: 'Food', value: 'food'},
  {label: 'Utilities', value: 'utilities'},
  {label: 'Transportation', value: 'transportation'},
  {label: 'Entertainment', value: 'entertainment'},
  {label: 'Other', value: 'other'},
];

export default function NewEntry({navigation}) {
  const [entryType, setEntryType] = useState('income');
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState(null);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const incomeEntry = () => setEntryType('income');
  const expenseEntry = () => setEntryType('expense');

  const openDatePicker = () => setShowDatePicker(true);
  const closeDatePicker = () => setShowDatePicker(false);

  const handleSetDate = value => setDate(value);
  const handleSetCategory = value => setCategory(value);
  const handelDescription = value => setDescription(value);
  const handelAmount = value => setAmount(value);

  const handleSaveEntry = () => {
    const newEntry = {
      id: getNextId(),
      type: entryType,
      date: date,
      category: category ? category.value : null,
      description: description,
      amount: parseFloat(amount),
    };
    saveEntry(newEntry.id, newEntry);
    navigation.navigate('Activities');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>New Entry</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.entryButton,
            entryType === 'income' && styles.activeIncomeButton,
          ]}
          onPress={incomeEntry}>
          <Text style={styles.buttonText}>Income</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.entryButton,
            entryType === 'expense' && styles.activeExpenseButton,
          ]}
          onPress={expenseEntry}>
          <Text style={styles.buttonText}>Expense</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Date:</Text>
      <TouchableOpacity onPress={openDatePicker} style={styles.dateInput}>
        <Text>{date.toLocaleDateString()}</Text>
      </TouchableOpacity>
      <DatePicker
        modal
        open={showDatePicker}
        date={date}
        mode="date"
        onConfirm={date => {
          closeDatePicker();
          handleSetDate(date);
        }}
        onCancel={() => {
          closeDatePicker();
        }}
      />
      {entryType === 'income' ? null : (
        <View>
          <Text style={styles.label}>Category:</Text>
          <Dropdown
            style={styles.dropdown}
            data={categoryOptions}
            labelField="label"
            valueField="value"
            placeholder="Select Category"
            value={category}
            onChange={handleSetCategory}
          />
        </View>
      )}
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.textInput}
        keyboardType="default"
        onChangeText={handelDescription}
        value={description}
      />
      <Text style={styles.label}>Amount:</Text>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        onChangeText={handelAmount}
        value={amount}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleSaveEntry}>
        <Text style={styles.addButtonText}>Add!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
