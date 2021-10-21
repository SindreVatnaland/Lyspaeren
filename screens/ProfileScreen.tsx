import * as React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';

import ProfilePage from '../components/ProfilePage/ProfilePage';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function ProfileScreen({ navigation }: RootTabScreenProps<'ProfileScreen'>) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View lightColor="#eee" />
          <ProfilePage path="/screens/TabOneScreen.tsx" navigation={undefined} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 42,
  },

});
