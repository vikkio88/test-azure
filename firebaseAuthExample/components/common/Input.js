import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) =>{
    const {containerStyle,labelStyle,textInputStyle} = styles;
    const { label, value, onChangeText, placeholder, secureTextEntry } = props;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={textInputStyle}
            />
        </View>
    );
}


const styles = {
    containerStyle:{
        height: 60,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelStyle: {
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
    }, 
    textInputStyle: {
        height: 50,
        width: 300,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 4
    }
};

export {Input};