import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { sortItem } from './styles'

export default class SortItem extends React.Component {
  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={sortItem.item}>
          <Text style={[sortItem.text, this.props.current && sortItem.textCurrent]}>{this.props.title}</Text>
          {this.props.current && currentItem()}
        </View>
      </TouchableOpacity>
    )
  }
}

function currentItem() {
  return <View style={sortItem.underline}></View>;
}