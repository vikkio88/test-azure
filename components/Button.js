import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    const { children,onPress } = props;
    const {buttonStyle,textStyle} = styles;
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );  
};

const styles = {
    buttonStyle:{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#007aff',
        marginLeft: 15,
        marginRight: 15,
        elevation: 2,
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};


export default Button;