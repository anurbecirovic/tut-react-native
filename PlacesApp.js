  import React, { Component } from 'react';
  import {connect} from 'react-redux';
  //Import statement with Component
  import {
    StyleSheet,
    View,
  } from 'react-native';
  import PlaceInput from './src/components/PlaceInput/PlaceInput';
  import PlaceList from './src/components/PlaceList/PlaceList';
  import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
  import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index';
  
  
  class PlacesApp extends Component {
  
    onAddedHandler = placeName => {
     console.log('placeName: ', placeName);
     this.props.onAddPlace(placeName);
    }
  
    placeSelectedHandler = key => {
      this.props.onSelectPlace(key);
    }
  
    placeDeletedHandler = () => {
      this.props.onDeletePlace();
    };
  
    modalClosedHandler = () => {
     this.props.onDeselectPlace();
    };
  
    render() {
      return (
          <View style={styles.container}>
            <PlaceDetail selectedPlace={this.props.selectedPlace} onItemDeleted={this.placeDeletedHandler} onModalClosed={this.modalClosedHandler} />
            <PlaceInput onPlaceAdded={this.onAddedHandler} />
            <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler} />
          </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }
  });
  
  const mapStateToProps = state => {
    return {
      places: state.places.places,
      selectedPlace: state.places.selectedPlace
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      onAddPlace: (name) => dispatch(addPlace(name)),
      onDeletePlace: () => dispatch(deletePlace()),
      onSelectPlace: (key) => dispatch(selectPlace(key)),
      onDeselectPlace: () => dispatch(deselectPlace())
    };
  }
  
  /**Returns the function that we pass our App*/
  export default connect(mapStateToProps,mapDispatchToProps)(PlacesApp);