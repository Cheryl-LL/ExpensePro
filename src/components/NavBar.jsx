import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";
import { IconFill, IconOutline } from "@ant-design/icons-react-native";
import { useNavigation } from '@react-navigation/native';

export default function NavBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
        <IconOutline name="home" style={styles.navIcon}/>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('NewEntry')}>
        <IconOutline name="plus-circle" style={styles.navIcon}/>
        <Text style={styles.navText}>New Entry</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Activities')}>
        <IconOutline name="unordered-list" style={styles.navIcon}/>
        <Text style={styles.navText}>Activities</Text>
      </TouchableOpacity>
    </View>
  );
}