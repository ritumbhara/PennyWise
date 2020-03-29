import React, { Component } from 'react'
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

// Constants
const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class ProfileButton extends Component {


    render() {
        return (
            // <View style={styles.temp} >
            <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate('Settings')}>
                    <Image source={require("../../assets/images/avat.png")} style={styles.imageStyle}/>
            </TouchableOpacity>
            // </View>
        )
    }
}

export default ProfileButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFCC00",
        width: viewHeight/13,
        height: viewHeight/13,
        borderRadius: 10,
        ...Platform.select({
        ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
        },
        android: {
            elevation: 1
    
        },
        }),
    },

    imageStyle: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderRadius: 10,
    },

    temp: {
        width: viewWidth,
        height: viewHeight,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
