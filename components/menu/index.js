import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Titlte from '../typography/title';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View style={[styles.list, this.props.isOpen && styles.listIsOpen]} accessibilityRole='menubar'>
        <View style={this.props.isOpen && styles.aside}>
          <View style={styles.menuBox1}></View>
          <View style={styles.menuBox2}></View>
          <View style={styles.menuBox3}></View>
        </View>
        <View style={styles.item} accessibilityRole='menuitem'>
          <Titlte text='First'/>
        </View>
        <View style={styles.item} accessibilityRole='menuitem'>
          <Titlte text='Second'/>
        </View>
        <View style={styles.item} accessibilityRole='menuitem'>
          <Titlte text='Third'/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    position: 'fixed',
    left: '100%',
    top: 51,
    height: '100vh',
    width: '100vw',
    zIndex: 3,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderLeftWidth: 5,
    borderLeftColor: 'steelblue',
    borderTopWidth: 5,
    borderTopColor: 'steelblue',
  },
  listIsOpen: {
    left: 140,
  },
  aside: {
    position: 'absolute',
    top: 0,
    left: -145,
    width: 140,
    height: '100%',
    backgroundColor: 'white',
    zIndex: 2
  },
  menu: {
    width: 50,
    height: 50,
  },
  item: {
    paddingBottom: 20,
  },
  menuBox1: {
    width: '100%',
    height: '20%',
    backgroundColor: 'steelblue',
  },
  menuBox2: {
    width: '100%',
    height: '30%',
    backgroundColor: 'skyblue',
  },
  menuBox3: {
    width: '100%',
    height: '50%',
    backgroundColor: 'powderblue',
  },
});