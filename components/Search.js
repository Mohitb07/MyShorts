import { Entypo } from '@expo/vector-icons'
import React, { useContext } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import { NewsContext } from '../api/Context'
import SingleNews from './SingleNews'

const Search = () => {

    const {news:{articles}, darkTheme} = useContext(NewsContext)
    
    const [searchResult, setSearchResult] = React.useState([])
    const [modalVisible, setModalVisible] = React.useState(false)
    const [currentNews, setCurrentNews] = React.useState()
    console.log(articles)
    const handleSearch = (text) => {
        if(!text){
            setSearchResult([])
            return
        }
        setSearchResult(articles.filter(article => article.title.toLowerCase().includes(text.toLowerCase())))
    }

    const handleModal = (n) => {
        setModalVisible(true)
        setCurrentNews(n)
    }
    
    return (    
        <View style={{width:'100%', position:'relative'}}>
            <TextInput 
                style={{...styles.search, backgroundColor: darkTheme ? 'black':'lightgrey', color:darkTheme ? 'white':'black'}}
                onChangeText={(text) => handleSearch(text)}
                placeholder="Search for news"
                placeholderTextColor={darkTheme ? 'white' : 'black'}
            />
            <View style={styles.searchResult}>
                {searchResult.slice(0,4).map(n => (
                    <TouchableOpacity key={n.title} activeOpacity={0.7} onPress={() => handleModal(n)}>
                        <Text style={{...styles.singleResult, backgroundColor: darkTheme ? 'black':'lightgrey', color:darkTheme ? 'white':'black'}}>
                            {n.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{
                        position:'absolute',
                        zIndex:1,
                        right:0,
                        margin:20,
                    }}>
                        <Entypo name="circle-with-cross" size={30} color="white"/>
                    </TouchableOpacity>
                    <View style={{height:'100%', transform: [{scaleY: -1}]}}>
                        <SingleNews item={currentNews} />
                    </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        paddingVertical:10,
        paddingHorizontal:15,
        borderRadius:10,
        marginBottom:20,
        fontSize:16,
    },
    searchResult: {
        position:'absolute',
        zIndex:2,
        top:50,
    },
    singleResult: {
        borderRadius:5,
        padding:10,
        margin:.5,
        shadowColor: 'black',
        elevation: 5
    }
    
})

export default Search
