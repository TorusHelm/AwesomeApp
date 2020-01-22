import React from 'react'
import { TouchableOpacity , View, Text, Image, ScrollView, SafeAreaView } from 'react-native'
import Input from '../../input'
import { styles } from './styles'

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
            <Image 
              style={styles.leafBig} 
              source={require('../../../assets/images/leaf-big.png')} 
            />
            <View style={styles.filstInput}>
              <Input 
                placeholder='Simple@gmail.com' 
                label='Email' 
                type='emailAddress' 
              />
            </View>
            <View style={styles.secondInput}>
              <Input 
                placeholder='Password' 
                label='Password' 
                type='password' 
                secureTextEntry 
              />
            </View>
            <TouchableOpacity 
              style={styles.btn}
              onPress={() => navigate('Catalog')}
            >
              <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>
            <Text style={styles.btnCaption}>Forgot Password?</Text>
            <View>
              <Text style={styles.otherMethodsCaption}>or using</Text>
            </View>
            <View style={styles.otherMethodsBtnSet}>
              <TouchableOpacity
                style={styles.otherMethodsBtn}
              >
                <Image 
                  style={styles.otherMethodsBtnIcon} 
                  source={require('../../../assets/icons/ico_facebook.svg')} 
                />
                <Text style={styles.otherMethodsBtntext}>Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.otherMethodsBtn}
              >
                <Image 
                  style={styles.otherMethodsBtnIcon} 
                  source={require('../../../assets/icons/ico_google.svg')} 
                />
                <Text style={styles.otherMethodsBtntext}>Google</Text>
              </TouchableOpacity>
            </View>
            <Image 
              style={styles.leafSmall} 
              source={require('../../../assets/images/leaf.png')} 
            />
            <View style={styles.footer}>
              <Text style={styles.footerText}>Don’t have an account? </Text>
              <TouchableOpacity onPress={() => navigate('SignUp')}>
                <Text style={styles.footerLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}