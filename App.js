import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import PlacesApp from './PlacesApp';
//Import statement with Component

export default class App extends Component {
    render() {
      return (
        <Provider store={configureStore()}>
          <PlacesApp />
        </Provider>
      );
    }
  }
