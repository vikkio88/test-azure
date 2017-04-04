import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header }  from './components/common'
import LoginForm  from './components/LoginForm'

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: "uncacomo",
        authDomain: "acerto.ebaseapp.com",
        databaseURL: "https://sicuramente.firebaseio.com",
        projectId: "authsamplencacomo",
        storageBucket: "ovviamentesi.appspot.com",
        messagingSenderId: "123456789"
      }
    );
    
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Header text={"Authentication"}/>
        <LoginForm />
      </View>
    );
  }
}

