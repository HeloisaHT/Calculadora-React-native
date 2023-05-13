import React from 'react';
import { StyleSheet, View } from 'react-native';
import Calculator from './calculadora/calculadora';
const App = () => {
  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
