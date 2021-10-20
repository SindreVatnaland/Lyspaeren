import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

import Colors from '../../constants/Colors';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';
import CardItem from './CardItem';

export default function MainPage({ path }: { path: string }) {
  return (
    <View>
        <CardItem CardTitle="Fiks mobilen min"/>
        <CardItem CardTitle="Bobil med defekt GPS"/>
        <CardItem CardTitle="iPhone med ødelagt skjerm"/>
        <CardItem CardTitle="Brødrister"/>
        <CardItem CardTitle="Ps4 Overoppheter"/>
        <CardItem CardTitle="iPhone 5"/>
        <CardItem CardTitle="Defekt høytaler"/>
        <CardItem CardTitle="Ødelagt vaskemaskin"/>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

