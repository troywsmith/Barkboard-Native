import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return ( 
      <View style={styles.container}>
        <Text style={styles.title}> leaders </Text>
        <View style={styles.flexcontainer}>
          <View style={styles.leader}> 
            <Image
              style={styles.thumb}
              source={{uri: 'https://images.pexels.com/photos/248307/pexels-photo-248307.jpeg?auto=compress&cs=tinysrgb&h=350'}}
            />
            <Text style={styles.leadertext}> this week </Text>

          </View>
          <View style={styles.leader}> 
            <Image
              style={styles.thumb}
              source={{uri: 'https://images.pexels.com/photos/248307/pexels-photo-248307.jpeg?auto=compress&cs=tinysrgb&h=350'}}
            />
            <Text style={styles.leadertext}> last week </Text>
          </View>
          <View style={styles.leader}> 
            <Image
              style={styles.thumb}
              source={{uri: 'https://images.pexels.com/photos/248307/pexels-photo-248307.jpeg?auto=compress&cs=tinysrgb&h=350'}}
            />
            <Text style={styles.leadertext}> all time </Text> 
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: 150,
  },
  flexcontainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    margin: 10,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
  },
  leader: {
    width: '30%',
    flex: 1,
    alignItems: 'center',
  },
  leadertext: {
    fontSize: 20,
  },
  thumb: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: 'red',
    borderWidth: 2,
  }
}); 

