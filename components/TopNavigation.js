import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { NewsContext } from '../api/Context'

const TopNavigation = ({index, setIndex}) => {

    const {fetchNews, darkTheme, setDarkTheme} = useContext(NewsContext)
    
    return (
        <View style={{...styles.container, backgroundColor: darkTheme ? '#282C35':'white'}}>
            {index === 0 ? 
                (<TouchableOpacity style={styles.left} onPress={() => setDarkTheme(!darkTheme)}>
                    <Text style={{...styles.text, color:darkTheme ? 'lightgrey': 'black'}}>
                        <MaterialCommunityIcons name="theme-light-dark" size={24} color="#007FFF" />
                    </Text>
                </TouchableOpacity> ) : (
                    <TouchableOpacity style={styles.left} onPress={() => setIndex(index === 0 ? 1 : 0)}>
                        <SimpleLineIcons name="arrow-left" size={15} color="#007FFF" />
                        <Text style={{...styles.text, color:darkTheme ? 'lightgrey': 'black'}}>Discover</Text>
                    </TouchableOpacity>
                )}

                <Text style={{...styles.center, color:darkTheme ? 'lightgrey': 'black'}}>
                    {index  ? 'All News' : 'Discover'}
                </Text>

                {index ? (
                    <TouchableOpacity 
                        style={styles.right}
                        onPress={() => fetchNews('general')}
                        >
                        <Text style={styles.text}>
                            <AntDesign name="reload1" size={24} color="#007FFF" />
                        </Text>
                    </TouchableOpacity>
                ): (
                    <TouchableOpacity 
                     style={styles.left}
                     onPress={() => setIndex(index === 0 ? 1 : 0)}
                    >
                        <Text style={{...styles.text, color:darkTheme ? 'lightgrey': 'black'}}>All News</Text>
                        <SimpleLineIcons name="arrow-right" size={15} color="#007FFF" />
                    </TouchableOpacity>
                )}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'black'
    },
    text: {
        fontSize: 16,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 80,        
    },
    right: {
        width: 80,
        alignItems: 'flex-end',
    },
    center: {
        paddingBottom: 6,
        borderBottomColor:'#007FFF',
        borderBottomWidth: 5,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: '700',
    }

})

export default TopNavigation
