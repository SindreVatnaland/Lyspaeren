import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import { FC } from 'react';
import { CompositeNavigationProp } from '@react-navigation/native';


export interface ICardData {
  CardTitle: string;
  CardDescription?: string;
  CardRating: string;
  CardPrice: string;
  CardImage?: string;
  navigation: CompositeNavigationProp<any, any>;
}


const CardItem: FC<ICardData> = (props) => {
  return (
    <Pressable onPress={() => props.navigation.navigate("Item", {
      cardTitle: props.CardTitle,
      cardDescription: props.CardDescription,
      cardRating: props.CardRating,
      cardPrice: props.CardPrice,
      cardImage: props.CardImage,
    })}>
      <Card style={styles.submit}>
        <Card.Cover style={styles.image} source={{ uri: props.CardImage || 'https://picsum.photos/700' }} />
        <View style={styles.parent}>
          <Card.Content style={styles.leftChild}>
            <Title style={styles.cardTitle}>{props.CardTitle}</Title>
          </Card.Content>
          <Card.Content style={styles.rightChild}>
            <Title style={styles.cardContent}>{props.CardPrice}</Title>
            <Title style={styles.cardContent}>★{props.CardRating}</Title>
          </Card.Content>
        </View>
      </Card>
    </Pressable>
  )
};


const styles = StyleSheet.create({
  submit: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 0,
    marginBottom: 20,
    paddingBottom: 20,
    backgroundColor: '#e2e2e2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  image: {
    borderColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
  },
  parent: {
    flexDirection: "row",
    height: 100,
    padding: 20
  },
  leftChild: {
    marginTop: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: "center",
    flex: 0.7,
    maxWidth: "70%"
  },
  rightChild: {
    textAlign: "center",
    flex: 0.3,
    maxWidth: "30%"
  },
  cardContent: {
    textAlign: "center",
  },
  cardTitle: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});


export default CardItem;