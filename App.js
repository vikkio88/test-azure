import React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';

export default class App extends React.Component {
  render() {
    return (
        <View>
          <Header headerText={'RM Toolkit'} />
          <AlbumList />
        </View>
    );
  }
}
