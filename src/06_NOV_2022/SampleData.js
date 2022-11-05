import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';
import Data from '../common/Data.json';

const SampleData = () => {
  const [data, setData] = React.useState(Data);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{data[2].restaurant}</Text>
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
    fontSize: 32,
    fontFamily: 'Poppins-Black',
  },
});

export default SampleData;
