import React from 'react'
import {View, Dimensions, Text, StyleSheet} from 'react-native'
import {LineChart} from 'react-native-chart-kit'
import ExpenseDetail from '../components/ExpenseDetail/ExpenseDetail';

let viewWidth = Dimensions.get("window").width

export default function DetailExpenseScreen(props) {
    let mainlabel = props.navigation.getParam("title");
    const data = {
        labels: props.navigation.getParam(mainlabel)["labels"],
        datasets: [
          {
            data: props.navigation.getParam(mainlabel)["data"],
            color: (opacity = 1) => `rgba(62, 132, 255, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ]
      };

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(62, 132, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5
    };

    const expenseview = props.navigation.getParam(mainlabel)["labels"].map((value, index) => <ExpenseDetail day={value} key={index} expense={props.navigation.getParam(mainlabel)["data"][index]}></ExpenseDetail>)

    return (
        <View style={styles.maincointainer}>
            <Text style={styles.headertext}> {props.navigation.getParam("title")} Expenses </Text>
            <LineChart
                data={data}
                width={viewWidth}
                height= {220}
                chartConfig={chartConfig}
            />
            <View style={styles.textcontainer}>
                <Text style={styles.expenselabel}> Day </Text>
                <Text style={styles.expenselabel}> Savings </Text>
            </View>
            {expenseview}
        </View>
    )
}

const styles = StyleSheet.create({

    maincointainer : {
        flex: 1,
        width: viewWidth,
        flexDirection: "column",
        alignItems: "center"
    },

    headertext : {
        color: "#3A3535",
        fontWeight: "600",
        fontSize: 23,
        margin: 25
    },

    textcontainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        color: "#3A3535",
        fontSize: 23,
        marginTop: 20,
        width: viewWidth,
        marginBottom: 10
    },

    expenselabel: {
        fontSize: 19
    }
})