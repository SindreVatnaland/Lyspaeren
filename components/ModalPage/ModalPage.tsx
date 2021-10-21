import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

import Colors from '../../constants/Colors';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';


export default function ModalPage({ path }: { path: string }) {
  const [price, setPrice] = useState(2500);
  const [km, setKm] = useState(70);
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Price range:{"\n"}
          <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
          >{price+"kr"}</Text>
        </Text>


        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          
          <Slider
            style={{width: 300, height: 40}}
            value={price}
            minimumValue={0}
            maximumValue={10000}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#aaaaaa"
            onValueChange={(value) => setPrice(Math.floor(value))}
          />
        </View>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Distance Range (km):{""}
        </Text>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          {km+"km"}
        </Text>
      </View>

      <View style={styles.helpContainer}>
      <Slider
            style={{width: 300, height: 40}}
            minimumValue={0}
            value={km}
            maximumValue={100}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#aaaaaa"
            onValueChange={(value) => setKm(Math.floor(value))}
          />
      </View>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
