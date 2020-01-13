import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from '../typography/title';

export default class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Simple'
    }
  }

  render() {
    return (
      <View style={styles.container} accessibilityRole='link'>
        <Title style={styles.text} text='Simple' />
        <View style={styles.dot}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 100
  },
  dot: {
    height: 6,
    width: 6,
    borderRadius: '50%',
    backgroundColor: 'lightblue',
    marginLeft: 8
  },
  text: {
    color: 'lightblue'
  }
});