import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { categories, sources } from '../api/api'
import { NewsContext } from '../api/Context'
import Search from '../components/Search'

const Discover = () => {
    const {setCategory, setSourceNews, darkTheme} = useContext(NewsContext)
    const windowWidth = Dimensions.get('window').width

    return (
        <View style={{...styles.discover}}>
            {/* Search */}
            <Search/>
            {/* Categories */}
            <Text style={{...styles.subtitle, color:darkTheme ? 'white': 'black'}}>
                Categories
            </Text>
            <Carousel 
                layout="default"
                data={categories}
                renderItem={({item, index}) => (
                    <TouchableOpacity style={styles.categoryContainer} onPress={() => setCategory(item.name)}>
                        <Image source={{uri: item.pic}} style={styles.categoryImage}/>
                        <Text style={{...styles.name, color:darkTheme ? 'white': 'black'}}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                sliderWidth={windowWidth}
                itemWidth={Math.round(windowWidth/3)}
                activeSlideAlignment="start"
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                enableSnap={true}
                loop={true}
            />
            {/* Sources */}
            <Text style={{...styles.subtitle, color:darkTheme ? 'white': 'black'}}>Sources</Text>
            <View style={styles.sources}>
                    {sources.map(s => (
                        <TouchableOpacity
                            onPress={() => setSourceNews(s.id)}
                            key={s.id}
                            style={styles.sourceContainer}
                            >
                            <Image source={{uri: s.pic}} style={styles.sourceImage}/>
                        </TouchableOpacity>
                    ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    discover: {
        padding: 10,
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 8,
        marginHorizontal: 5,
        borderBottomColor: '#007FFF',
        borderBottomWidth: 5,
        alignSelf:'flex-start',
        borderRadius: 10,
    },
    name:{
        fontSize: 14,
        textTransform: 'capitalize',
    },
    categoryImage:{
        height: '60%',
        width: '100%',
        resizeMode: 'contain',
    },
    categoryContainer:{
        height:130,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    sourceImage: {
        height: '100%',
        borderRadius:10,
        resizeMode: 'cover',
    },
    sources: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingVertical: 15,
    },
    sourceContainer: {
        height:130,
        width: '40%',
        borderRadius:10,
        margin:15,
        backgroundColor: '#cc313d'
    }
})

export default Discover
