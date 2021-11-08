import React, { useContext } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native'
import { NewsContext } from '../api/Context';
import moment from 'moment';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height; 

const SingleNews = ({item, index}) => {

    const {darkTheme} = useContext(NewsContext)
    
    return (
        <View    
         style={{
            height: windowHeight,
            width: windowWidth,
            transform: [{ scaleY: -1 }],
          }}
        >
            <Image
                source={{uri: item.urlToImage}}
                style={{
                    height: '50%',
                    resizeMode:'cover',
                    width:windowWidth
                }}
            />
            <View style={{...styles.description, backgroundColor: darkTheme ? '#282C35':'white'}}>
                <Text style={{...styles.title, color:darkTheme ? 'white': 'black'}}>{item.title}</Text>
                <Text style={{...styles.content, color:darkTheme ? 'white': 'black'}}>{item.description}</Text>
                <Text style={{fontSize: 10,color:darkTheme ? 'white': 'black', fontWeight:'bold'}}>
                    Short by
                    <Text> {item.author ?? 'unknown'}</Text>
                </Text>
                <Text style={{fontSize:10,color:darkTheme ? 'white': 'black', marginTop:30}}>
                    Published - 
                    <Text> {moment(item.publishedAt).fromNow() ?? 'unknown'}</Text>
                </Text>
                <ImageBackground
                    blurRadius={40}
                    style={styles.footer}
                    source={{uri: item.urlToImage}}
                >
                    <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                        <Text numberOfLines={2} style={{ fontSize:13, color:'white'}}>
                            {item?.content}
                        </Text>
                        <Text style={{fontSize:13, fontWeight:'bold', color:'white'}}>
                            Read More
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        paddingBottom: 10,       
    },
    content:{
        fontSize: 13,
        paddingBottom: 10,
    },
    footer:{height:80, position:'absolute',bottom:0, backgroundColor:'#d7be69', justifyContent:'center', paddingHorizontal:20, width:windowWidth},
    
    description:{
        flex:1,
        padding:15,
    }
})

export default SingleNews
