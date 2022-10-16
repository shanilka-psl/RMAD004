import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

const fruitArray = [
  {
    id: 1,
    name: 'Banana',
  },

  {
    id: 2,
    name: 'Orange',
  },

  {
    id: 3,
    name: 'Apple',
  },
];

const Lesson_01 = () => {
  React.useEffect(() => {
    functionOne();
  }, []);

  const functionOne = () => {
    const name = 'Apple';

    // If CONDITIONS
    if (name === 'BlueBerry') {
      console.log('Fruit 1', name);
    } else if (name === 'Orange') {
      console.log('Fruit 2', name);
    } else {
      console.log('Fruit 3', 'Not Available');
    }

    //Ternary Operator
    // name === 'Orange'
    //   ? console.log('Fruit', true)
    //   : console.log('Fruit', false);

    // Switch Case
    // switch (name) {
    //   case 'Apple':
    //     console.log('Fruit', true);
    //     break;

    //   default:
    //     console.log('Fruit', false);
    //     break;
    // }

    const marks = 75;
    // 75 -> A
    // 65 - 75 -> B
    // 55 - 65 -> C
    // 35 - 55 -> s
    // 35 - W

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
