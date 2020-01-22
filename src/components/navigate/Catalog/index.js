import React from 'react'
import { TouchableOpacity , View, Text, Image, ScrollView, SafeAreaView } from 'react-native'
import { styles, leftSide, leftSideList, rightSide, rightSideHeader, rightSideContent } from './styles'
import Card from '../../card'
import SortList from '../../sortList'

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={styles.mainContainer}>

        <View style={leftSide.container}>
          <TouchableOpacity>
            <Image style={leftSide.menu} source={require('../../../assets/icons/ico_menu.svg')} />
          </TouchableOpacity>
          <SortList />
        </View>

        <View style={rightSide.container}>

          <View style={rightSideHeader.main}>
            <View style={rightSideHeader.title}>
              <Text>Discover</Text>
            </View>
            <View style={rightSideHeader.circle}>
              <View style={rightSideHeader.dot}></View>
            </View>
          </View>

          <ScrollView style={rightSideContent.container}>
            <Card />
            <Card />
            <Card />
          </ScrollView>
        </View>

      </SafeAreaView>
    );
  }
}