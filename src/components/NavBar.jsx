import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";
import Icon from 'react-native-vector-icons/Ionicons';

export default function NavBar({navigation}) {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem}>
        <Icon name="home-outline" size={24} color="#888" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={()=>(navigation.navigate('NewEntry'))}>
        <Icon name="add-outline" size={24} color="#888" />
        <Text style={styles.navText}>New Entry</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} >
        <Icon name="list-outline" size={24} color="#888" />
        <Text style={styles.navText} >Activities</Text>
      </TouchableOpacity>
    </View>
  );
}