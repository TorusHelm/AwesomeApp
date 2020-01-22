import React from 'react'
import { View } from 'react-native'
import SortItem from '../sortItem'
import { list } from './styles'

const test = [
  {
    name: 'Recomended'
  }, 
  {
    name: 'Outdoor'
  }, 
  {
    name: 'Indoor'
  }
];

export default class SortList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: test[0].name
    }
  }

  generator = () => {
    const listItems = test.map((item) =>
      <SortItem 
        key={item.name}
        title={item.name}
        onPress={() => this.setState({current: item.name})}
        current={this.state.current == item.name && true}
      />
    );

    return listItems;
  }

  render () {
    return (
      <View style={list.main}>
        {this.generator()}
      </View>
    )
  }
}