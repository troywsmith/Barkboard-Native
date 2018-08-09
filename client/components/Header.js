import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import NavigationBar from 'react-native-navbar';

export default class App extends React.Component {
  render() {
    return ( 
      <View style={styles.container}>
        <NavigationBar
          title={titleConfig}
          leftButton={leftButtonConfig}
          rightButton={rightButtonConfig}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'gray',
  },
});

const leftButtonConfig = {
  title: '📷',
  handler: () => alert('Upload!'),
};

const titleConfig = {
  title: 'Barkboard',
};

const rightButtonConfig = {
  title: '⚙️',
  handler: () => alert('Settings!'),
};

