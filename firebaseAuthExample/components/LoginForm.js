import React,{Component} from 'react';
import {Text} from 'react-native';
import {Card,CardSection,Button,Input,Spinner} from './common'
import firebase from 'firebase';

class LoginForm extends Component{
    state = { email: '', password: '', error: '', loading: false };

    login() {
        const {email,password} = this.state;
        this.setState({error: '', loading:true});
        firebase.auth().signInWithEmailAndPassword(
            email,
            password
        ).then(this.onLoginSuccess.bind(this))
        .catch(()=>{
                firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this));
            }
        );
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication Failed!',
            loading: false
        });
    }

    renderButton() {
        if(this.state.loading){
            return (
                <Spinner />
            );
        }

        return (
            <Button onPress={this.login.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input 
                    value={this.state.email}
                    onChangeText={email=>this.setState({email})}
                    label={"Email"}
                    placeholder={"user@gmal.com"}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                    value={this.state.password}
                    secureTextEntry
                    onChangeText={password=>this.setState({password})}
                    label={"Password"}
                    placeholder={"password"}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;