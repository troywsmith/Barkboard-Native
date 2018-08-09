import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
        dataSource: null,
    }
  }

  componentDidMount () {
      return fetch('https://api.coinmarketcap.com/v2/listings/')
          .then ( (response) => response.json() )
          .then( (responseJson) => {
              this.setState({
                  isLoading: false,
                  dataSource: responseJson.data,
              })
          })
      .catch((error) => {
          console.log(error)
      });
  }

  render() {
    if (this.state.isLoading) {
      return (

        <ScrollView style={styles.container}>
          <Image
            style={styles.dogpic}
            source={{uri: 'https://images.pexels.com/photos/248307/pexels-photo-248307.jpeg?auto=compress&cs=tinysrgb&h=350'}}
          />
          <Text style={styles.othertext}>rocky</Text>
          <Text style={styles.othertext}>5234 likes</Text>
          <Text> LOADING </Text>
        </ScrollView>
        
      )
    } else {
      let movies = this.state.dataSource.map((val, key) => {
          return (

          <View key={key} style={styles.item}>
            <Image
              style={styles.dogpic}
              source={{uri: 'https://images.pexels.com/photos/248307/pexels-photo-248307.jpeg?auto=compress&cs=tinysrgb&h=350'}}
            />
            <Text>{val.name}</Text>
            <Text style={styles.othertext}>5234 likes</Text>
            <Text style={styles.othertext}>👍</Text>
          </View>

          )
      });
      return (
          <ScrollView style={styles.container}>
              {movies}
          </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcometext: {
    color: 'black',
    fontSize: 40,
  },
  othertext: {
    color: 'black',
    fontSize: 20,
  },
  dogpic: {
    width: 375,
    height: 300,
  }
})