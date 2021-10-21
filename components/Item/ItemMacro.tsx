import { View } from "../Themed";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Image, Text } from "react-native";
import { Chip, Icon, Avatar } from 'react-native-elements';
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
    }
})

const dummyData = () => ({
    uri: "https://picsum.photos/id/0/700/400",
    title: "My PC's keyboard is not working!",
    desc: "One week ago when I was using microsoft word, the keyboard on my PC suddenly stopped working! I have no idea why or how to fix this. Can somebody please help me?",
    categories: ["PC", "Keyboard", "Electricity", "Microsoft word"],
    stars: 3.8,
    name: "Jonas Gilje",
    avatarUri: 'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg'
});

export const ItemMacro = () => {
    const [dummy, _] = useState(dummyData());
    return (
        <>
            <View style={{ minHeight: "100%" }}>
                <ScrollView >
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
                        <View style={[styles.categoriesView, styles.contentView]}>
                            {dummy.categories.map((category, i) => (
                                <Chip key={i} title={category} style={styles.category} />
                            ))}
                        </View>
                        <View style={{ paddingLeft: 5 }}>
                            <View style={[styles.rowFlexView, { paddingBottom: 5 }]}>
                                <Icon name="star-rate" color="#ffd107" size={35} />
                                <Text style={styles.profileText}> 3,8</Text>
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