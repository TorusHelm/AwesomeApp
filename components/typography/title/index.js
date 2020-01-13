import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Title extends React.Component {
  render() {
    return (
      <Text style={styles.title}>{this.props.text}</Text>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: '1.333'
  }
});