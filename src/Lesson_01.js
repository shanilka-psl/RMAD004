import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

const Lesson_01 = () => {
  React.useEffect(() => {
    functionOne();
  }, []);

  const functionOne = () => {
    const name = 'Apple';
    const marks = 90;

    // if-else Condition example
    if (name === 'BlueBerry') {
      console.log('Fruit 1', name);
    } else if (name === 'Orange') {
      console.log('Fruit 2', name);
    } else {
      console.log('Fruit 3', 'Not Available');
    }
    // if-else if-else Condition example
    // marks -> 75 -> A
    // marks -> 65 - 75 -> B
    // marks -> 55 - 65 -> C
    // marks -> 35 - 55 -> s
    // marks -> 35 - W

    if (marks >= 75) {
      console.log('A');
    } else if (marks >= 65) {
      console.log('B');
    } else if (marks >= 55) {
      console.log('c');
    } else if (marks >= 35) {
      console.log('S');
    } else {
      console.log('W');
      console.log('W');
    }
    // ===========================================

    //Ternary Operator -> if-else

    name === 'Orange'
      ? console.log('Fruit', true)
      : console.log('Fruit', false);

    //Ternary Operator -> if-else if - else

    /**
     Ternary Operator Syntax

     condition1 ? value1
     : condition2 ? value2
     : condition3 ? value3
     : value4;

    */

    marks >= 75
      ? console.log('A')
      : marks >= 65
      ? console.log('B')
      : marks >= 55
      ? console.log('c')
      : marks >= 35
      ? console.log('S')
      : console.log('W');

    // ===========================================

    // Switch Case
    switch (name) {
      case 'Apple':
        console.log('Fruit', true);
        break;

      default:
        console.log('Fruit', false);
        break;
    }

    switch (true) {
      case marks >= 75:
        console.log('Result: A ');
        break;
      case marks >= 65:
        console.log('Result: B ');
        break;
      default:
        console.log('Result: Fail ');
        break;
    }
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
