'use client';
import {useState} from 'react';
import {Button, Modal, SafeAreaView, Text, TextInput, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {getNextId, saveEntry} from '../utilities/DataStorage';

const categoryOptions = [
  {
    label: 'Food',
    value: 'food',
  },
  {
    label: 'Utilities',
    value: 'utilities',
  },
  {
    label: 'Transportation',
    value: 'transportation',
  },
  {
    label: 'Entertainment',
    value: 'entertainment',
  },
  {
    label: 'Other',
    value: 'other',
  },
];
export default function NewEntry({navigation}) {
  const [entryType, setEntryType] = useState('income');
  const [date, setDate] = useState();
  const [category, setCategory] = useState(null);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const handleEntryType = value => setEntryType(value);
  const handleSetCategory = value => setCategory(value);
  const handelDescription = value => setDescription(value);
  const handelAmount = value => setEntryType(value);
  const handleSaveEntry = () => {
    const newEntry = {
      id: getNextId(),
      type: entryType,
      date: date,
      category: category,
      description: description,
      amount: amount,
    };
    saveEntry(newEntry.id, newEntry);
    navigation.navigate('Activities');
  };

  return (
    <SafeAreaView>
      <Text>New Entry</Text>
      <Button title="Income" />
      <Button title="Expense" />
      <Text>Date:</Text>
      {entryType === 'income' ? null : (
        <View>
          <Text>Category: </Text>
          <Dropdown
            data={categoryOptions}
            labelField="label"
            valueField="value"
            placeholder="Select Category"
            value={category}
            onChange={handleSetCategory}
          />
        </View>
      )}
      <Text>Description:</Text>
      <TextInput
        keyboardType="default"
        onChange={handelDescription}
        value={description}
      />
      <Text>Amount:</Text>
      <TextInput
        keyboardType="numeric"
        onChange={handelAmount}
        value={amount}
      />
      <Button title="Add" onPress={handleSaveEntry} />
    </SafeAreaView>
  );
}
