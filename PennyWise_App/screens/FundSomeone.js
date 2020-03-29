import React, { useState } from 'react'
import { StyleSheet, Dimensions, Text, View, Button, Alert, Image, TouchableOpacity } from 'react-native'
import InputText from '../components/InputText'
import NextButton from '../components/Button/NextButton';

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;



export default function FundSomeone() {

    const [pagerValue, setPagerValue] = useState(1);

    const _nextButtClick = () => {
        console.log(pagerValue);
        if (pagerValue < 1){
          let newPagerValue = pagerValue + 1;
          setPagerValue(newPagerValue);
        }
      } 
    
      const _backButtClick = () => {
        console.log(pagerValue);
        if (pagerValue > 0){
          let newPagerValue = pagerValue - 1;
          setPagerValue(newPagerValue);
          
        }
      } 

    const ques = ["What is the Intrest Rate ?","What is the Amount ?","What is the Tenure ?"]

    const questions = ques.map((value, index) => <InputText title={value} key={index}/>)

   

    const _onclickfund = (num) => {

        if (num){
            return(
            <View style={{height:viewHeight/1.3, width: viewWidth, alignItems: 'center', flexDirection: 'column'}}>
            <View style={styles.questionaligner}>
            {questions}
            </View>
            <NextButton title='Raise a Request'></NextButton>
            </View>);
        }
        else{
            return(
                <View style={styles.container}>
                  <View style={styles.postProfile}>
                    <Image source={require('../assets/images/robot-dev.png')} style={styles.profilePicPost}/>
                    <View style={styles.textProfile}>
                      <Text style={styles.postProfileName}>Shaaran</Text>
                      <Text style={styles.postProfileBio}>Student</Text>
                    </View>
                  </View>
                  <View style={styles.postContent}>
                    <Text style={styles.postText}> Intrest : 6% </Text>
                    <Text style={styles.postText}> Amount : 60,000 </Text>
                    <Text style={styles.postText}> Duration : 19 Weeks </Text>
                  </View>
                  {/* <View style={styles.starContainer}> */}
                  <View style={{marginTop: 20, flex: 1, flexDirection:'row'}}></View>
                    <NextButton title='Accept'></NextButton>
                    <NextButton title='Reject'></NextButton>
                  {/* </View> */}
                </View>
            );
            
        }
    }


    return (
        <View style={styles.maincontainer}>
            <View style={styles.headers}>
            <TouchableOpacity onPress={_nextButtClick}>
                <Text style={styles.headertext}>Request Refund</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={_backButtClick}>
                    <Text style={styles.headertext}>Fund Someone</Text>
                </TouchableOpacity>
            </View>
            {_onclickfund(pagerValue)}
            
        </View>
    )



}

const styles = StyleSheet.create({


    buttons: {
      width: viewWidth/5,
      height: viewHeight/10,

    },

    textinput: {
      width: viewWidth/1.15,
      height: viewHeight/20,
      // backgroundColor: '#000'
    },

    questionaligner : { 
      // alignItems: 'center',
      width: viewWidth/1.15, 
      height: viewHeight/2,
      marginLeft: viewWidth/6
    },

    maincontainer: {
        height: viewHeight,
        width: viewWidth,
        backgroundColor: '#fff',
        flex: 1,
        
    },

    headers: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20
    },

    headertext: {
        fontSize: 22,
        color: '#707070'
    },

    questions: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    container: {
        width: viewWidth/1.1,
        alignSelf:'center',
        flexDirection:'column',
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        // height: viewHeight/2,
        // width:viewWidth/1.2,
        elevation: 4,
        borderRadius:10,
        marginTop:viewHeight/30,
        marginBottom:viewHeight/28
      },
      postProfile:{
        marginTop:viewHeight/35,
        flexDirection:'row',
        alignItems:'center'
        
      },
      profilePicPost:{
        flex:2,
        height:viewHeight/12,
        width:viewWidth/8,
        borderRadius: 15,
        marginRight: viewWidth/27,
        marginLeft: viewWidth/27
      },
      textProfile:{
        flex:7,
        flexDirection:'column',
        marginRight: viewWidth/27,
        //justifyContent:'center',
        alignContent:'flex-start',
      },
      postProfileName:{
        fontSize: 16,
        color: '#393535',
      },
      postProfileBio:{
        fontSize: 14,
        color: '#707070',
      },
      postContent:{
        marginTop: viewHeight/34,
        marginLeft: viewWidth/27,
      },
      postText:{
        fontSize: 16,
        color: '#393535',
      },
      starContainer:{
        marginTop:viewHeight/36,
        marginBottom:viewHeight/36,
        marginLeft: viewWidth/1.5,
        flexDirection:'row',
        borderStyle:'solid',
        borderColor:'#393535',
      }
})
