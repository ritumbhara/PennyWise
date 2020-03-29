import React, {useState, Fragment} from 'react';
import { ScrollView, StyleSheet, View, Dimensions, Button, Text, Image} from 'react-native';
import { ProgressChart } from "react-native-chart-kit";
import CardView from '../components/CardView/CardView'
import { FloatingAction } from "react-native-floating-action";
import { TouchableOpacity } from 'react-native-gesture-handler';
import StoreButton from '../components/StoreButton/StoreButton';
import ProfileButton from '../components/ProfileButton/ProfileButton';


const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export default function HomeScreen(props) {

  const actions = [
    {
      text: "FinanceKnow",
      icon: require("../assets/images/icon.png"),
      name: "bt_financenow",
      position: 2
    },
    {
      text: "Add Expense",
      icon: require("../assets/images/addicon.png"),
      name: "bt_add",
      position: 1
    }
  ]

  onSwipePerformed = (action) => {
    /// action : 'left' for left swipe
    /// action : 'right' for right swipe
    /// action : 'up' for up swipe
    /// action : 'down' for down swipe
    
    switch(action){
      case 'left':{
        console.log('left Swipe performed');
        break;
      }
       case 'right':{
        console.log('right Swipe performed');
        break;
      }
       case 'up':{
        console.log('up Swipe performed');
        break;
      }
       case 'down':{
        console.log('down Swipe performed');
        break;
      }
       default : {
       console.log('Undeteceted action');
       }
    }

  }

  const _nextButtClick = () => {
    console.log(pagerValue);
    if (pagerValue < 2){
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
  



    // ExpenseName : [ProfitTodayCheck, TodayValue, ProfitWeekCheck, WeekValue, ProfitMonthCheck, MonthValue]
    const [ExpenseValueState, setExpenseValueState] = useState({
      Food: [0,198,1,1293,1,6987],
      Clothing: [1,128,1,2987,0,12879],
      Travel: [1, 86, 1, 367, 0, 6731],
      Electronics: [1, 158, 1, 1282, 1, 7813],
      Charity: [0, 124, 0, 768, 0, 6194],
      Cosmetics: [0, 139, 0, 382, 0, 11918]
    });

    const [pagerValue, setPagerValue] = useState(0);

    const data = {
      labels: ["Food", "Clothing", "Travel"], // optional
      data: [0.4, 0.6, 0.3]
    };

    const famarray = ['John Cena', 'Lemon Stone', 'Harbajhan Dutta'];

    const {navigate} = props.navigation;

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(62, 132, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5
    };

    const _onclick = (title) => {
      console.log(title);
      let detailExpenseData = {
        Food: {
        labels: ["28 Dec","29 Dec","30 Dec","31 Dec","1 Jan","2 Jan","3 Jan"],
        data: [88, 150, 81, 156, 206, 27, 89]
          },
        Clothing: {
          labels: ["28 Dec","29 Dec","30 Dec","31 Dec","1 Jan","2 Jan","3 Jan"],
          data: [81, 228, 107, 76, 90, 226, 28]
          },
        Travel: {
          labels: ["28 Dec","29 Dec","30 Dec","31 Dec","1 Jan","2 Jan","3 Jan"],
          data: [17, 70, 88, 136, 175, 223, 72]
          },
        Electronics: {
          labels: ["28 Dec","29 Dec","30 Dec","31 Dec","1 Jan","2 Jan","3 Jan"],
          data: [88, 150, 81, 156, 206, 27, 47]
          },
        Charity: {
          labels: ["28 Dec","29 Dec","30 Dec","31 Dec","1 Jan","2 Jan","3 Jan"],
          data: [157, 83, 136, 208, 55, 66, 92]
          },
        Cosmetics: {
          labels: ["28 Dec","29 Dec","30 Dec","31 Dec","1 Jan","2 Jan","3 Jan"],
          data: [85, 145, 220, 86, 57, 94, 78]
          },
        title: title
      }
      navigate('DetailExpense', detailExpenseData);
    }

     // ExpenseName : [ProfitTodayCheck, TodayValue, ProfitWeekCheck, WeekValue, ProfitMonthCheck, MonthValue]
    let cardViewList = Object.keys(ExpenseValueState).map((value,index) => <CardView title={value} key={index} profitTodayCheck={ExpenseValueState[value][0]} todayValue={ExpenseValueState[value][1]} profitWeekCheck={ExpenseValueState[value][2]} weekValue={ExpenseValueState[value][3]} profitMonthCheck={ExpenseValueState[value][4]} monthValue={ExpenseValueState[value][5]} pressevent={(title) => _onclick(title)} />)

  return (
    <Fragment>
    <ScrollView style={{flex: 1}}>
        <View style={styles.topButtonContainer}>
          <StoreButton navigation={props.navigation}/>
          <ProfileButton navigation={props.navigation}/> 
        </View>
      <View style={styles.container}>

        <View style={styles.chartholder}>
          <ProgressChart
            data={data}
            width={viewWidth/1.25}
            height={200}
            chartConfig={chartConfig}
            hideLegend={false}
            />
        </View>
        
        <Text style={{fontSize: 23, marginTop: 20, marginBottom: 30, fontFamily: 'poppins-medium'}}>Family Member</Text>

        <View style={{flex:1, flexDirection: 'row', marginBottom: 20}}>
        <TouchableOpacity onPress={_backButtClick}>
        <Image
          style={{marginRight: 40, marginTop: 10}}
          source={require('/Users/shaaran/Hackathon/Project/C2C/finsy-tech/Finsy/assets/images/BackButt.png')}
        />
        </TouchableOpacity>
        <Text style={{fontSize: 20, marginTop: 20, fontFamily: 'poppins-medium'}} >{famarray[pagerValue]}</Text>
        <TouchableOpacity onPress={_nextButtClick}>
        <Image
          style={{marginLeft: 40, marginTop: 10}}
          source={require('/Users/shaaran/Hackathon/Project/C2C/finsy-tech/Finsy/assets/images/NextButton.png')}
          />
        </TouchableOpacity>
        </View>

        {cardViewList}
        


      </View>
      
    </ScrollView>
    <View style={{position: 'absolute', bottom: 0, left: 320, width: 100, height: 200, opacity: 1}}>
    <FloatingAction
        actions={actions}
        onPressItem={name => {
          console.log(`selected button: ${name}`);
          (name == 'bt_financenow') ? (navigate('Chatbot')) : (navigate('AddMoney'))
      }}
      />
    </View>
    </Fragment>
  );
}

HomeScreen.navigationOptions = {
  title: 'PennyWise',
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    width: viewWidth

  },

  topButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: viewWidth,
    marginTop: viewHeight/30,
  },

  title: {
    fontSize: 24,
    margin: 10,
    fontFamily: 'poppins-medium'
  },

  chartholder: {
    width: viewWidth/1.15,
    backgroundColor: '#FFF',
    borderRadius: 15,
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
      marginTop: viewHeight/20,
  }
});