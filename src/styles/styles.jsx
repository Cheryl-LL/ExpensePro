import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  openButton: {
    fontSize: 18,
    color: '#007BFF',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
  },
  navText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
  navItem: {
    alignItems: 'center', 
    justifyContent: 'center',
  },
  navIcon: {
    marginBottom: 4,
    size: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
//new entry
  entryButton: {
    flex: 1,
    padding: 15,
    margin: 5,
    backgroundColor: '#ccc',
    alignItems: 'center',
    borderRadius: 5,
  },
  activeIncomeButton: {
    backgroundColor: 'green', 
  },
  activeExpenseButton: {
    backgroundColor: 'red', 
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  dateInput: {
    padding: 10,
    width: 300,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  dropdown: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
    width: 300,
  },
  textInput: {
    height: 40,
    width: 300,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  //Activities
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  date: {
    flex: 1,
  },
  category: {
    flex: 1,
  },
  description: {
    flex: 2,
  },
  amount: {
    flex: 1,
    textAlign: 'right',
  },
  income: {
    color: 'green',
  },
  expense: {
    color: 'red',
  },
  noEntries: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },

  //Home screen
  /*topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  topText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chartContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  setGoalButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  setGoalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chartContainer: {
    maxHeight: 220,
    marginVertical: 20,
},
categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
},
categoryText: {
    fontSize: 16,
},
percentageText: {
    fontSize: 16,
    fontWeight: 'bold',
},
chartContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: 20,
  height: 250, 
  width: '100%',
},
*/
container: {
  flex: 1,
  padding: 20,
  backgroundColor: '#fff',
},
topContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 10,
},
topText: {
  fontSize: 16,
  fontWeight: 'bold',
},
header: {
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 85, 
},
chartContainer: {
  alignItems: 'center',
  marginVertical: 20,
  maxHeight: 220,
},
setGoalButton: {
  backgroundColor: '#007BFF',
  padding: 10,
  borderRadius: 5,
  alignItems: 'center',
  marginTop: 10,
},
setGoalButtonText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},
goalContainer: {
  alignItems: 'center',
  marginVertical: 10,
},
goalHeader: {
  fontSize: 18,
  fontWeight: 'bold',
},
goalText: {
  fontSize: 16,
},
});
