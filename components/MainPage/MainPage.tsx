import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

import Colors from '../../constants/Colors';
import { cardData } from '../cardData';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';
import CardItem from './CardItem';

export default function MainPage({ path }: { path: string }) {
  return (
    <View>
        {cardData().map(( card, index ) => (
        <CardItem
          key = {index}
          CardTitle={card.cardTitle}
          CardDescription={card.cardDescription}
          CardRating={card.cardRating}
         />
         ))}
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

