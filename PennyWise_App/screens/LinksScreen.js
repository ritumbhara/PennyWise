import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';


const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export default function LinksScreen(props) {

  const {navigate} = props.navigation;

  const _onclick = id => {
    if (id == "0"){
      navigate('Fund', {id: id});
    }
    
  }

  return (
    <View style = {styles.container}>
    
      <TouchableOpacity style = {styles.topdividercontainer} onPress={() => _onclick("0")}>
        <Text style={styles.toptextstyle} >Micro Loan from your friends</Text>
        <Image source={require("../assets/images/loaningicon/ico2.png")} style={{width:200, height:200}} />
      </TouchableOpacity>

      <TouchableOpacity style = {styles.bottomdividercontainer} onPress={() => _onclick("1")}>
        <Text style={styles.downtextstyle}>Effortless Loans in seconds</Text>
        <Image source={require("../assets/images/loaningicon/ico1.png")} style={{width:200, height:200}} />
      </TouchableOpacity>
      
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'LoanNow',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: viewWidth,
    height: viewHeight,
    paddingTop: 15,
    backgroundColor: '#fff',
  },

  topdividercontainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    width: viewWidth,
    height: viewHeight/2
  },

  bottomdividercontainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgba(62, 132, 255,1)",
    justifyContent: "center",
    alignItems: "center",
    width: viewWidth,
    height: viewHeight/2
  },

  toptextstyle: {
    color: "rgba(62, 132, 255,1)",
    fontSize: 20
  },

  downtextstyle: {
    color: "#fff",
    backgroundColor: "rgba(62, 132, 255,1)",
    fontSize: 20

  }

});
