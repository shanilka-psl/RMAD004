import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

const Lesson_01 = () => {
  React.useEffect(() => {
    functionOne();
  }, []);

  const functionOne = () => {
    console.log('Hi');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lesson 01</Text>
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

export default Lesson_01;
