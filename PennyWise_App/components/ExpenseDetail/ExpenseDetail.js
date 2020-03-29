import React from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'

let viewWidth = Dimensions.get("window").width

export default function ExpenseDetail(props) {
    return (
        <View style={styles.maincontainer}>
            <Text style={styles.valuestyle}> {props.day} </Text>
            <Text style={styles.valuestyle}> {props.expense} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        width: viewWidth,
        height: 200,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingRight: 30
    },

    valuestyle: {
        color: "rgba(60, 133, 255, 1)",
        fontSize: 18
    }
})