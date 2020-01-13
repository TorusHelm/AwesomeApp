import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Logo from '../logo';
import Menu from '../menu';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Logo',
      menuIsOpen: false
    }
  }

  handleMenuState = () => {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen
    })
  }

  render() {
    return (
      <View style={styles.header} accessibilityRole='menu'>
        <Logo />
        <Menu isOpen={this.state.menuIsOpen}/>
        <Button style={styles.toggler} onPress={this.handleMenuState} title='btn'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 5,
    borderBottomColor: 'steelblue',
    paddingVertical: 8,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 3
  },
   toggler: {
     width: 50,
     height: 50
   }
});