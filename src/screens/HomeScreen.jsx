import { Button, Text, View } from "react-native";
import { styles } from "../styles/styles";

export default function HomeScreen({navigation}) {
    return (
       <View>
            <Text style={styles.title}>Expense Pro</Text>
            <Button title="Set Your Monthly Goal" onPress={() => navigation.navigate("Set Goal")}/>
        </View>

 
    )

}