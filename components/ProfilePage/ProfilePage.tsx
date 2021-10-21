import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Button, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

import Colors from '../../constants/Colors';
import { cardData } from '../cardData';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';
import { RootTabScreenProps } from '../../types';
import { CompositeNavigationProp } from '@react-navigation/native';

export default function ProfilePage({ path, navigation }: { path: string, navigation?: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
        />
      </View>
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputView}>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.forgot_button2}>Register an account</Text>
      </View>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    flex: 1,
    marginTop: "50%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    backgroundColor: "#e2e2e2",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginTop: 10,
  },
  forgot_button2: {
    color: "blue",
    height: 30,
    marginTop: 15,
  }
});