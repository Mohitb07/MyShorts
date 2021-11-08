import React, { useContext } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { NewsContext } from '../api/Context'
import SingleNews from '../components/SingleNews'

const News = () => {

    const {news:{articles}} = useContext(NewsContext)

    const [activeSlide, setActiveSlide] = React.useState()
    
    const windowsHeight = Dimensions.get('window').height
    
    return (
        <View style={styles.carousel}>
            {
                articles && (
                    <Carousel
                        layout={'default'}
                        data={articles}
                        sliderHeight={300}
                        itemHeight={windowsHeight}
                        vertical={true}
                        renderItem={({item, index}) => (
                            <SingleNews item={item} index={index} />
                        )}
                        onSnapToItem={(index) => setActiveSlide(index)}
                    />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    carousel: {
      flex: 1,
      transform: [{ scaleY: -1 }],
      backgroundColor: "black",
    },
  });

export default News
