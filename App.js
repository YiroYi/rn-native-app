import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const[enteredGoal, setEnteredGoal] = useState('');
  const[courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal])
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
          />
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <ScrollView >
        {courseGoals.map((goal) => <View style={styles.listItem} key={goal}><Text>{goal}</Text></View>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  },
  listItem: {
    padding: 10,
    backGroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    margin: 10
  }
});
