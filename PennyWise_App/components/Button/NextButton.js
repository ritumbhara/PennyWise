import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Platform, TouchableOpacity, Alert, Animated } from 'react-native';

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class NextButton extends Component {

    _onPress = () => {
        (this.props.title == "Raise a Request") ? Alert.alert('Your Request has been Submitted') : console.log("");
    }

    render() {
        return (
            
            <TouchableOpacity style={styles.parentContainer} onPress={this._onPress}>
                <Text style={styles.textStyling}>{this.props.title}</Text>
            </TouchableOpacity>
            
        )
    }
}

export default NextButton

const styles = StyleSheet.create({
    parentContainer: {
        ...(viewHeight > 575) ? {
        width: viewWidth/2.5,
        height: 50,
        marginBottom: 55,
        } : {
        width: viewWidth/2.5,
        height: 40,
        marginBottom: 30
        },
        backgroundColor: '#3C85FF',
        borderRadius: 7,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    
    textStyling: {
        ...(viewHeight > 575) ? {
        fontSize: 18
        } : {
        fontSize: 14
        },
        color: '#ffffff',
        fontWeight: '600'

    }
})