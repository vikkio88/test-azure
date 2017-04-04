import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner }  from './components/common'
import LoginForm  from './components/LoginForm'

export default class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: "SomeApi-Key",
        authDomain: "someAuthDomain.firebaseapp.com",
        databaseURL: "https://someDatabaseUrl.firebaseio.com",
        projectId: "someProjectId",
        storageBucket: "someStorageBucket.appspot.com",
        messagingSenderId: "1234567891011"
      }
    );

    firebase.auth().onAuthStateChanged( user => {
      if(user){
        this.setState({ loggedIn: true });
      }else{
        this.setState({ loggedIn: false });
      }
    }); 
  }

  renderContent() {

    switch (this.state.loggedIn){
      case true:
        return (
          <Button
            onPress={() => firebase.auth().signOut()}
          >
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;

    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Header text={"Authentication"}/>
        {this.renderContent()}
      </View>
    );
  }
}

