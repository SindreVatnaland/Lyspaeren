import { View } from "../Themed";
import React, { useState, FC } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Image, Text } from "react-native";
import { Chip, Icon, Avatar } from 'react-native-elements';
import Styles from "../../constants/Styles"
import { ICardData } from "../cardData"

const styles = StyleSheet.create({
    topImage: {
        width: "100%",
        aspectRatio: 1.75,
        resizeMode: 'contain',
    },
    content: {
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    contentText: {
        fontSize: 20,
    },
    contentView: {
        paddingBottom: 20
    },
    categoriesView: {
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap"
    },
    category: {
        flex: 1,
    },
    rowFlexView: {
        flexDirection: "row",
        alignItems: "center",
    },
    profileText: {
        fontWeight: "bold",
        fontSize: 25
    },
    chat: {
        position: "absolute",
        right: 0,
        bottom: 0
    },
    price: {
        alignSelf: "flex-end",
        position: "relative",
        top: -15,
        paddingRight: 5
    }
})

const dummyData = () => ({
    uri: "https://picsum.photos/id/0/700/400",
    title: "My PC's keyboard is not working!",
    desc: "One week ago when I was using microsoft word, the keyboard on my PC suddenly stopped working! I have no idea why or how to fix this. Can somebody please help me?",
    categories: ["PC", "Keyboard", "Electricity", "Microsoft word"],
    stars: 3.8,
    name: "Jonas Gilje",
    avatarUri: 'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
    price: "900kr"
});

export const ItemMacro: FC<any> = ({ route, nav }) => {
    const [dummy, _] = useState(dummyData());
    const [item,] = useState<ICardData>(route.params);
    return (
        <>
            <View style={{ minHeight: "100%" }}>
                <ScrollView >
                    <Image
                        source={{ uri: item.cardImage }}
                        style={styles.topImage} />
                    <View style={styles.content}>
                        <Text style={Styles.title}>
                            {item.cardTitle}
                        </Text>
                        <Text style={[Styles.title, styles.price]}>
                            {item.cardPrice}
                        </Text>
                        <Text style={[styles.contentText, styles.contentView]}>
                            {item.cardDescription}
                        </Text>
                        <View style={[styles.categoriesView, styles.contentView]}>
                            {dummy.categories.map((category, i) => (
                                <Chip key={i} title={category} style={styles.category} />
                            ))}
                        </View>
                        <View style={{ paddingLeft: 5 }}>
                            <View style={[styles.rowFlexView, { paddingBottom: 12 }]}>
                                <Icon name="star-rate" color="#ffd107" size={35} />
                                <Text style={styles.profileText}>{item.cardRating}</Text>
                            </View>
                            <View style={styles.rowFlexView}>
                                <Avatar
                                    rounded
                                    source={{
                                        uri: dummy.avatarUri
                                    }} />
                                <Text style={styles.profileText}> Jonas Gilje</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.chat}>
                <Icon name="chat-bubble" raised />
            </View>
        </>
    )
}