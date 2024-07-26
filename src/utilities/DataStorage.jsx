import {MMKV} from 'react-native-mmkv';

const dataStorage = new MMKV({
  id: 'userData',
  encryptionKey: 'verySecureDataLOL',
});
const goalStorage = new MMKV();

export const setGoal = (month, goal) => {
  const goals = loadGoals() || {};
  goals[month] = goal;
  goalStorage.set('goals', JSON.stringify(goals));
};

export const loadGoals = () => {
  const goalsString = goalStorage.getString('goals');
  return goalsString ? JSON.parse(goalsString) : {};
};

//saveEntry saves the key/value pair (id/entry) into the storage
export const saveEntry = (id, entry) => {
  dataStorage.set(id, JSON.stringify(entry));
};
//loadEntry get the value of a specific key(id)
export const loadEntry = id => {
  const entry = dataStorage.getString(id);
  return entry ? JSON.parse(entry) : null;
};
//deleteEntry clear the storage
export const deleteAllEntry = () => {
  dataStorage.clearAll();
};

//loadAllEntry get all keys in data storage and then get value in each keys accordingly and place the value into a entryList
export const loadAllEntry = () => {
  const dataSize = dataStorage.getAllKeys();
  const entryList = [];
  if (dataSize != null)
  {
    for (let data of dataSize) {
      const entryString = dataStorage.getString(data);
      const entry = entryString ? JSON.parse(entryString) : null;
      if (entry != null) {
        entryList.push(entry);
      }
    }
  } 
  return entryList;
};

//getNextId returns the next id
export const getNextId = () => {
  const dataLength = dataStorage.getAllKeys();
  if (dataLength.length > 0) {
    const nextId = dataLength.length + 1;
    return nextId.toString();
  } else {
    return '1';
  }
};
