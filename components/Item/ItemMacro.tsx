import { View } from "../Themed";
import React, { useState } from "react";
import { StyleSheet, Image, Text } from "react-native";
import Styles from "../../constants/Styles"

const styles = StyleSheet.create({
    topImage: {
        width: "100%",
        aspectRatio: 1.75,
        resizeMode: 'contain',
    },
    content: {
        paddingVertical: 5,
        paddingHorizontal: 8
    },
    contentText: {
        fontSize: 20
    },
    contentView: {
        paddingVertical: 10
    }
})

const dummyData = () => ({
    uri: "https://picsum.photos/id/0/700/400",
    title: "My PC's keyboard is not working!",
    desc: "One week ago when I was using microsoft word, the keyboard on my PC suddenly stopped working! I have no idea why or how to fix this. Can somebody please help me!"
});

export const ItemMacro = () => {
    const [dummy, _] = useState(dummyData());
    return (
        <View>
            <Image
                source={{ uri: dummy.uri }}
                style={styles.topImage} />
            <View style={styles.content}>
                <Text style={Styles.title}>
                    {dummy.title}
                </Text>
                <Text style={[styles.contentText, styles.contentView]}>
                    {dummy.desc}
                </Text>
            </View>
        </View>
    )
}