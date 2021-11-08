import React, { useContext, useState } from 'react'
import { View, Text, useWindowDimensions } from 'react-native'
import { SceneMap, TabView } from 'react-native-tab-view'
import { NewsContext } from '../api/Context'
import Discover from '../Screens/Discover'
import News from '../Screens/News'
import TopNavigation from './TopNavigation'

const InShortTabs = () => {
    const layout = useWindowDimensions()

    const {index, setIndex} = useContext(NewsContext)
    
    const [routes] = useState([
        { key: 'first', title: 'Discover' },
        { key: 'second', title: 'News' },
    ])

    const renderScene = SceneMap({
        first: Discover,
        second: News,
    })
    
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
        />
    )
}

export default InShortTabs
