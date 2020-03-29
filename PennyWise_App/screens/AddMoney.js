import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import NextButton from '../components/Button/NextButton';

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;



export class AddMoney extends Component {

    _onclick = () => {
        alert("Money Added Successfully");
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.searchBar} placeholder='Enter Money to be Manually added'></TextInput>
                <TouchableOpacity onPress = {this._onclick}>
                    <NextButton title='Add Money'></NextButton>
                </TouchableOpacity>
                
            </View>
        )
    }
}

export default AddMoney

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },

    searchBar: {
        
        height: viewHeight/12,
        width: viewWidth/1.15,
        elevation: 3,
        backgroundColor: '#ffffff',
        marginBottom: 100,
        borderRadius: 10,
        paddingLeft: 10,
        color: '#707070'
        
    },



})