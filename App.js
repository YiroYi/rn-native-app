import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding:50}}>
      <View>
        <TextInput
          placeholder="Goal"
          style={{borderColor: 'white', borderWidth: 1, padding: 10}}
          />
        <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>
  );
}

