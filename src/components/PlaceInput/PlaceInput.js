import React, {Component} from 'react';
import {View, TextInput, Button,StyleSheet} from 'react-native';
class PlaceInput extends Component {
  state = {
    placeName: ""
  };
  
  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    })
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.props.onPlaceAdded(this.state.placeName);
  };


    render(){
        return(
            <View style={styles.contentRow}>
            <TextInput
              style={styles.input}
              value={this.state.placeName}
              onChangeText={this.placeNameChangedHandler}
            />
            <Button
              style={styles.button}
              onPress={this.placeSubmitHandler}
              title="Add"
              color="#841584"
              accessibilityLabel="Button for adding new Place"
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    contentRow: {
      marginTop: 50,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    input: {
      width: "70%"
    },
    button: {
      width: "30%"
    }
  });
  


export default PlaceInput;