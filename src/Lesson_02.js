import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

const Lesson_02 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lesson 02</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
  },
});

export default Lesson_02;
