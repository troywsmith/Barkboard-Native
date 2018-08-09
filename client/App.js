import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import Feed from './components/Feed';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Feed />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcometext: {
    color: 'black',
  },
  othertext: {
    color: 'blue',
  }
});