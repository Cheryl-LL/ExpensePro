'use client';
import {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {loadAllEntry} from '../utilities/DataStorage';

export default function Activities({navigation}) {
  const [entries, setEntries] = useState([]);

  useEffect = () => {
    const allEntries = loadAllEntry();
    setEntries(allEntries);
  }

  function ListRenderer({entry}){
    return(
        <Text>{entry.date} | {entry.category} | {entry.description} | {entry.amount}</Text>
    );
  }

  return (
  <FlatList 
  data={entries}
  renderItem={ListRenderer}
  keyExtractor={entry => entry.id}
  />);
}
