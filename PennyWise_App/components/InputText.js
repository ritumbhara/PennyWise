import React from 'react'
import { Text, TextInput, StyleSheet, Dimensions, View } from 'react-native'

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export default function InputText(props) {

    return (
    <View style={styles.maincontainer}>
        <Text style={styles.texts}>{props.title}</Text>
        <TextInput
            style={{ 
                height: 50, 
                borderColor: 'gray', 
                borderWidth: 0, 
                color: 'white', 
                backgroundColor: '#77A8F8', 
                width: viewWidth/1.5, 
                borderRadius: 5, 
                padding: 10, 
                fontSize: 19 }}/>
    </View>
    )
}


const styles = StyleSheet.create({
    maincontainer: {
        height: 100,
        width: viewWidth,
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff"
    },

    texts: {
        fontSize: 23,
        color: "#707070",
        marginBottom: 10
        
    }


})