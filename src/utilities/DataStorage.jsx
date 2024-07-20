

import { MMKV } from "react-native-mmkv";

const dataStorage = new MMKV({
    id: 'userData',
    encryptionKey:'verySecureDataLOL'
  });
  
  export const setGoal = (month, goal) => {
    const goals = loadGoals() || {};
    goals[month] = goal;
    dataStorage.set('goals', JSON.stringify(goals));
  };

  export const loadGoals = () => {
    const goalsString = dataStorage.getString('goals');
    return goalsString ? JSON.parse(goalsString) : {};
  };

  export const saveEntry = (id, entry) =>{
    dataStorage.set(id, JSON.stringify(entry));
  }
  export const loadEntry = (id) =>{
    const entry = dataStorage.getString(id);
    return entry ? (JSON.parse(entry)):(null);
  }
  export const loadAllEntry = () =>{
    const dataLength = dataStorage.getAllKeys().length();
    const entryList = [];
    for (let i = 0; i < dataLength; i++ ){
        const entryString = dataStorage.getString(i);
        const entry = entryString ? JSON.parse(entryString) : null;
        entryList = [...entryList, entry];
    }
    return entryList;
  }

  export const getNextId = () =>{
    const dataLength = dataStorage.getAllKeys().length();
    return dataLength + 1;
  }
  