import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {NavigationRouts} from '../common/enum';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Screen_01 = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{`My Name is ${name}`}</Text>
      <Icon size={30} color="purple" name="home" />
      <TextInput
        placeholder="Enter your Name"
        style={styles.input}
        onChangeText={val => setName(val)}
        value={name}
      />
      <TextInput
        placeholder="Enter your Email"
        style={styles.input}
        onChangeText={val => setEmail(val)}
        value={email}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate(NavigationRouts.SCREEN_02, {
            name: name,
            email: email,
          })
        }>
        <Text style={styles.title2}>Go to Lesson 02</Text>
      </TouchableOpacity>
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

  title2: {
    fontSize: 20,
    color: 'white',
  },
  btn: {backgroundColor: 'blue', padding: 10, borderRadius: 8},

  input: {
    alignSelf: 'center',
    width: 300,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    margin: 10,
  },
});

export default Screen_01;
