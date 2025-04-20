//import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, TextInput, View , Button } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>My App</Text>
//       <StatusBar style="auto" />



//       <View style={styles.inputContainer}>

//       <Text style={styles.text}>Log IN Now</Text>

//         <TextInput
//         style={styles.input}
//         placeholder="Enter your name"
//         value="ex: Tanni Rani"
//         onChangeText={(text) => console.log(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your Password"
//         value="ex: 123456"
//         onChangeText={(text) => console.log(text)}
//       />  

//       <Button style = {styles.btn}
//         title="Log In"
//         color="#841584"
//         accessibilityLabel="Learn more about this purple button"
//       />   
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#20232A',
//     color : '#ffffff',
//   },
//   text: {  
//     marginTop : 50,
//     marginLeft : 10,
//     color: '#ffffff', // Added text color style  
//     fontSize : 20,
//   },
//   inputContainer : {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   input : {
//     marginTop : 10,
//     width : 350,
//     borderWidth : 1,
//     borderColor : '#ffffff',
//     padding : 10,
//     color : '#ffffff',
//     },
//     btn : {
//       marginTop : 20,
//     },
// });
// import React from 'react';
// import {View, FlatList, StyleSheet, Text} from 'react-native';
// import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// const Item = ({title}) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

// const App = () => (
//   <SafeAreaProvider>
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={({item}) => <Item title={item.title} />}
//         keyExtractor={item => item.id}
//       />
//     </SafeAreaView>
//   </SafeAreaProvider>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

// export default App;

import React, { useState, useRef, useCallback } from "react";
import { StyleSheet, SafeAreaView, Text, View, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import Result from "./components/Result";
import Control from "./components/Control";
import { displayTime } from "./components/util";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setRunning] = useState(false);
  const [results, setResults] = useState([]);
  const timer = useRef(null);

  // https://reactjs.org/docs/hooks-reference.html#usecallback
  const handleLeftButtonPress = useCallback(() => {
    if (isRunning) {
      setResults((previousResults) => [time, ...previousResults]);
    } else {
      setResults([]);
      setTime(0);
    }
  }, [isRunning, time]);

  const handleRightButtonPress = useCallback(() => {
    if (!isRunning) {
      const interval = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, 10);

      timer.current = interval;
    } else {
      clearInterval(timer.current);
    }

    setRunning((previousState) => !previousState);
  }, [isRunning]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.display}>
        <Text style={styles.displayText}>{displayTime(time)}</Text>
      </View>

      <View style={styles.control}>
        <Control
          isRunning={isRunning}
          handleLeftButtonPress={handleLeftButtonPress}
          handleRightButtonPress={handleRightButtonPress}
        />
      </View>

      <View style={styles.result}>
        <Result results={results} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight,
  },
  display: {
    flex: 3 / 5,
    justifyContent: "center",
    alignItems: "center",
  },
  displayText: {
    color: "#fff",
    fontSize: 70,
    fontWeight: "200",
    fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : null,
  },
  control: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  result: { flex: 2 / 5 },
});
