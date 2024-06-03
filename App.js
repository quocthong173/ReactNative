import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, InputText, Button } from "react-native";

export default function App() {
  return (
    <View>
      <View style={styles.appContainer}>
        <InputText placeholder="your course goal!" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals ....</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
});
