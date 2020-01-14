import React from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render () {
    return (
      <View style={this.props.style}>
        <Text style={styles.label}>{this.props.label}</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({text})}
          placeholder={this.props.placeholder}
          textContentType={this.props.type}
          secureTextEntry={this.props.secureTextEntry}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderRadius: 12,
    fontSize: 16,
    lineHeight: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    fontFamily: 'lexendDeca'
  },
  label: {
    fontFamily: 'lexendDeca',
    fontSize: 14,
    lineHeight: 22,
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 12
  }
});