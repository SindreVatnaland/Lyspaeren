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
        <CardItem
          CardTitle="Fiks mobilen min"
          CardDescription="Ny iPhone med skader på skjermen"
          CardRating="★4.3"
         />
        <CardItem 
          CardTitle="Bilradio å bil å sånn spennande"
          CardDescription="Problemer med å få inn signaler"
          CardRating="★3.7"
        />
        <CardItem 
          CardTitle="iPhone skjerm"
          CardDescription="Ødelagt skjerm"
          CardRating="★4.8"
        />
        <CardItem 
          CardTitle="Brødrister"
          CardDescription="Vannskader"
          CardRating="★3.6"
        />
        <CardItem 
          CardTitle="Ps4 Overoppheter"
          CardRating="★1.7"/>
        <CardItem 
          CardTitle="iPhone 5"
          CardRating="★4.4"
        />
        <CardItem 
          CardTitle="Defekt høytaler"
          CardDescription="Skadet elementer"
          CardRating="★3.4"
        />
        <CardItem 
          CardTitle="Ødelagt vaskemaskin"
          CardRating="2.6"
        />
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

