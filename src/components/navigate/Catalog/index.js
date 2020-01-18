import React from 'react'
import { TouchableOpacity , View, Text, Image, ScrollView } from 'react-native'
import Input from '../../input'
import { styles } from './styles'
import Card from '../../card'

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Серега лох</Text>
          <Card />
        </View>
      </ScrollView>
    );
  }
}