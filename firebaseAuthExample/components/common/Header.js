import React from 'react'; 
import { Text, View } from 'react-native'; 

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    const { text } = props;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{text}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        paddingTop: 15,
        //for android is elevation
        elevation: 10,
        position: 'relative',
        //iOS
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 0.8
    },
    textStyle: {
        fontSize: 20
    }
};
export {Header}; 
