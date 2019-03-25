import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class LotsOfStyle extends Component {
    render () {
      return(
        <View style={styles.container}>
        <Text>This is normal Text</Text>
          <Text style={styles.bigBlue}>This Is big BLUE Text</Text>
          <Text style={styles.red}>This is Red Text</Text>
        </View>
      )
    }
  }

  export default LotsOfStyle;

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
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