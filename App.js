import React, { Component } from 'react';
//Import statement with Component
import { StyleSheet, TextInput, View, Text } from 'react-native';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  //If we use = () => {} syntacs this is refered to class App if we use placename() {} it will not be refered
  placeNameChangedHandler = val => {
    this.setState({
      text: val
    })
  }

  render() {
    return (
      <View style = {styles.container}>
        <TextInput
          style={{ width: 300}}
          value={this.state.text}
          onChangeText = {this.placeNameChangedHandler}
        />
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
