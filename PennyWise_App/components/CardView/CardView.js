import React, {useState} from 'react';
import { Card, View, StyleSheet, Text, TouchableOpacity} from 'react-native';


export default function CardView(props) {

    let firstbottomdividercontainerstyle = (props.profitTodayCheck == "0" ) ? styles.firstbottomdividercontainertextloss : styles.firstbottomdividercontainertextprofit;
    let secondbottomdividercontainerstyle = (props.profitWeekCheck == "0" ) ? styles.secondbottomdividercontainertextloss : styles.secondbottomdividercontainertextprofit;
    let thirdbottomdividercontainerstyle = (props.profitMonthCheck == "0" ) ? styles.thirdbottomdividercontainertextloss : styles.thirdbottomdividercontainertextprofit;
    
    const _onclick = (title) => {
        // console.log(title)
        props.pressevent(title)
    }

    return (

            <TouchableOpacity onPress={() => _onclick(props.title)} style={styles.maincontainer}>

                {/* TopContainer */}
                <View style={styles.topdividercontainer}>
                    <Text style = {styles.topdividercontainertext} >{props.title}</Text>
                </View>

                {/* BottomContainer */}
                <View style={styles.bottomdividercontainer}>

                    <View style={styles.firstbottomdividercontainer}>
                        <Text style = {styles.bottomdividercontainertexttitle} > Today </Text>
                        <Text style = {firstbottomdividercontainerstyle} > {props.todayValue} Rs </Text>
                    </View>

                    <View style={styles.secondbottomdividercontainer}>
                        <Text style = {styles.bottomdividercontainertexttitle} > This Week </Text>
                        <Text style = {secondbottomdividercontainerstyle} > {props.weekValue} Rs </Text>
                    </View>

                    <View style={styles.thirdbottomdividercontainer}>
                        <Text style = {styles.bottomdividercontainertexttitle} > This Month </Text>
                        <Text style = {thirdbottomdividercontainerstyle} > {props.monthValue} Rs </Text>
                    </View>


                </View>
                
        </TouchableOpacity>
    )
}


let styles = StyleSheet.create({

    maincontainer : {
        width : 300,
        height: 150,
        marginTop: 30,
        borderRadius: 20,
        borderColor: "transparent",
        borderWidth: 0.5,
        backgroundColor: "rgba(60, 133, 255, 0.7)",
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },

    topdividercontainer : {
        width : 300,
        height : 75,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: "transparent",
        borderBottomColor: "#707070",
        borderWidth: 0,
        backgroundColor: "transparent",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },

    bottomdividercontainer : {
        width : 300,
        height : 75,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderColor: "transparent",
        borderBottomColor: "#707070",
        borderWidth: 0,
        backgroundColor: "rgba(60, 133, 255, 0.2)",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly"

    },

    firstbottomdividercontainer: {
        width: 100,
        height: 75,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    secondbottomdividercontainer: {
        width: 100,
        height: 75,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    thirdbottomdividercontainer: {
        width: 100,
        height: 75,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },


    // Text Styles Comes Below

    topdividercontainertext : {
        color: "#FFFFFF",
        fontWeight: "500",
        fontSize: 20
    },

    bottomdividercontainertexttitle: {
        color: "#FFFFFF",
        fontWeight: "400",
        marginBottom: 5,
        fontSize: 17
    },

    firstbottomdividercontainertextprofit: {
        color: "#51B431",
        fontWeight: "bold"
    },

    firstbottomdividercontainertextloss: {
        color: "#FF6160",
        fontWeight: "bold"
    },

    secondbottomdividercontainertextprofit: {
        color: "#51B431",
        fontWeight: "bold"
    },

    secondbottomdividercontainertextloss: {
        color: "#FF6160",
        fontWeight: "bold"
    },

    thirdbottomdividercontainertextprofit: {
        color: "#51B431",
        fontWeight: "bold"
    },

    thirdbottomdividercontainertextloss: {
        color: "#FF6160",
        fontWeight: "bold"
    }

});