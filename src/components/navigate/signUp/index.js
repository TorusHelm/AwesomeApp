import React from 'react'
import { TouchableOpacity , View, Text, Image, ScrollView, SafeAreaView } from 'react-native'
import Input from '../../input'
import { styles } from './styles'
import { main } from '../../../assets/styles/layout'

export default class SignUp extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView>
        <ScrollView style={main.container}>
          <View style={styles.container}>
            <Text style={styles.title}>Create account</Text>
            <Image 
              style={styles.leafBig} 
              source={require('../../../assets/images/leaf-big.png')} 
            />
            <View style={[styles.filstInput, styles.filstInputFlex]}>
              <Input 
                placeholder='Jhon' 
                label='First name' 
                type='name' 
                style={styles.filstInput1}
              />
              <Input 
                placeholder='Smit' 
                label='Last name' 
                type='familyName' 
                style={styles.filstInput2}
              />
            </View>
            <View style={styles.filstInput}>
              <Input 
                placeholder='Simple@gmail.com' 
                label='Email' 
                type='emailAddress' 
                style={styles.fullInput}
              />
            </View>
            <View style={styles.filstInput}>
              <Input 
                placeholder='999-999-9999' 
                label='Mobile no.' 
                type='telephoneNumber' 
                style={styles.fullInput}
              />
            </View>
            <View style={styles.filstInput}>
              <Input 
                placeholder='Password' 
                label='Password' 
                type='password' 
                secureTextEntry
                style={styles.fullInput}
              />
            </View>
            <View style={styles.filstInput}>
              <Input 
                placeholder='Confirm password' 
                label='Confirm password' 
                type='password' 
                secureTextEntry
              />
            </View>
            <TouchableOpacity 
              style={styles.btn}
              onPress={() => navigate('Catalog')}
            >
              <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
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
              <Text style={styles.footerText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigate('Welcome')}>
                <Text style={styles.footerLink}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}