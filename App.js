/**
 * React native application practice using
 * https://facebook.github.io/react-native/docs/getting-started
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from './app/components/Home/Home.component';

//import Greetings from './app/components/Greetings.component';
//import BlinkText from './app/components/BlinkText.component';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});





class FixedDimensions extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: "powderblue"}}></View>
        <View style={{flex: 2, backgroundColor: "skyblue"}}></View>
        <View style={{flex: 3, backgroundColor: "steelblue"}}></View>
      </View>
    )
  }
}

class FlexBoxFlowDirection extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: "row"}}>
        <View style={{flex: 1, height: 50, backgroundColor: "blue"}}></View>
        <View style={{flex: 1, height: 50, backgroundColor: "red"}}></View>
        <View style={{flex: 1, height: 50, backgroundColor: "green"}}></View>
      </View>
    )
  }
}

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
//Home with custom component
//      <Home />


      //FlexBox flow direction
      // <FlexBoxFlowDirection/>


      //Styles Fixed Dimensions
      // <FixedDimensions/>

      //Styles
       <LotsOfStyle/>

//Simple State Code
      // <View style={styles.container}>
      //   <BlinkText paragraph="First Line"/>
      //   <BlinkText paragraph="Second Line"/>
      //   <BlinkText paragraph="Third Line"/>
      //   <BlinkText paragraph="Fourth Line"/>
      // </View>

//Simple Props Code
      // <View style={styles.container}>
      //   <Greetings name="Azeem"/>
      //   <Greetings name="Ahmed"/>
      //   <Greetings name="Faisal"/>
      // </View>

//Simple Views
      // <View style={styles.container}>
      //   <View style={styles.h1}>
      //     <Text style={styles.welcome}>Welcome to React Native!</Text>
      //   </View>
      //   <View style={styles.h2}>
      //     <Text style={styles.sinstructions}>To get started, edit App.js</Text>
      //     <Text style={styles.instructions}>{instructions}</Text>
      //   </View>
      // </View>
    );
  }
}

//Commented out because we cannot have 2 export in one app
// export default class Bananas extends Component<Props> {
//   render(){
//     let imageSource = {
//       uri : 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <View style={styles.container}>
//         <Image source={imageSource} style={{flex: 1, width: 193, height: 110}} />
//       </View>
//     )
//   }
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  h1: {
    flex: 1,
    backgroundColor: "green"
  },
  h2: {
    flex: 1,
    backgroundColor: "green"
  },
  bigBlue: {
    color: "blue",
    fontSize: 30,
    fontWeight: "bold"
  },
  red: {
    color: "red",
    fontWeight: "100"
  }
});
