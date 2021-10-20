import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FC } from 'react';


interface ICardData {
    CardTitle: String;
}



const CardItem : FC<ICardData> = (props) => {
  return(
  <Card style={styles.submit}>
    <Card.Cover style={styles.image} source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Title>{props.CardTitle}</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
  </Card>
  )
};


const styles = StyleSheet.create({
    submit: {
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
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
      }

  });


    export default CardItem;