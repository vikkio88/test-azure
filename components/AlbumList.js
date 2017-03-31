import React, { Component } from 'react'; 
import { View, Text } from 'react-native';
import axios from 'axios';

export default class AlbumList extends Component {
    state = {
        albums: []
    };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(
            response => {
                this.setState({ albums: response.data });
            }
        );
    }

    render() {
        return (
            <View>
                <Text>List</Text >
            </View> 
        ); 
    }
}


