import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Header />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    position: 'relative',
    zIndex: 1
  }
});
