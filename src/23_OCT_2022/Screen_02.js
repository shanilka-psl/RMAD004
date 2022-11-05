/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

const Screen_02 = ({route}) => {
  React.useEffect(() => {
    console.log('Route Params', route.params);
  }, []);

  const {name, email} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{`My Name is ${name}`}</Text>
      <Text style={styles.title}>{`My Email is ${email}`}</Text>
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
  },
});

export default Screen_02;
