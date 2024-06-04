import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredGoalCourse, setEnteredGoalCourse] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enterText)
  {
    setEnteredGoalCourse(enterText);
  }
  function addGoalHandler()
  {
    setCourseGoals([...courseGoals, enteredGoalCourse]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} onChange={goalInputHandler} placeholder="your course goal!" />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals ....</Text>
        {courseGoals.map((goal) => 
          <Text key={goal}>{goal}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  }
});
