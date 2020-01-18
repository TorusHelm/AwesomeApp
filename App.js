import React from 'react'
import * as Font from 'expo-font';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import WelcomeScreen from './src/components/navigate/welcome'
import ProfileScreen from './src/components/navigate/profile'
import SignUp from './src/components/navigate/signUp'
import Catalog from './src/components/navigate/Catalog'

const MainNavigator = createStackNavigator(
  {
    Welcome: {screen: WelcomeScreen},
    Profile: {screen: ProfileScreen},
    SignUp: {screen: SignUp},
    Catalog: {screen: Catalog},
  },
  {
    initialRouteName: 'Welcome',
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'lexendDeca': require('./src/assets/fonts/lexendDeca-Regular.ttf'),
    });
  }

  render () {
    return <AppContainer />
  }
}