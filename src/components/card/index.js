import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Dimensions, Text } from 'react-native'
import { card } from './styles.js'

export default class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render () {
    return (
      <View styles={styles.test2}>
        <Text>Test</Text>
        <Image styles={styles.test} source={require('../../assets/images/plants/plant1.png')} />
        <View>
          <TouchableOpacity style={card.star}>
            <Image styles={styles.test} source={require('../../assets/images/plants/plant2.png')} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

// const win = Dimensions.get('window');

const styles = StyleSheet.create({
  test: {
    width: 200,
    height: 200,
    position: 'absolute',
    left: 0,
    top: 0
  },
  test2: {
    backgroundColor: 'red',
    height: '100px',
    width: '100px',
    position: 'relative'
  }
});