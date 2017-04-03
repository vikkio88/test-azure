import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetails = ({album}) => {
    const {
        title,
        artist,
        thumbnail_image,
        image,
        url
    } = album;
    const {
        thumbStyle,
        headerContentStyle,
        thumbContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;

    return(
        <Card>
            <CardSection>
                <View style={thumbContainerStyle}>
                    <Image style={thumbStyle} source={ {uri: thumbnail_image}} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={ {uri: image}} />
            </CardSection>
            <CardSection>
                <Button onPress={ ()=> Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};


const styles = {
    headerContentStyle:{
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbStyle: {
        height: 50,
        width: 50,
    },
    thumbContainerStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle:{
        height: 400,
        flex: 1,
        width: null
    }
};

export default AlbumDetails;