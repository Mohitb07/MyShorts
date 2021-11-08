import React, { useContext } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import InShortTabs from './components/InShortTabs';
import Context from './api/Context';
import { NewsContext } from './api/Context';

function App() {
  
  const {darkTheme, setDarkTheme} = useContext(NewsContext)
  
  return (
      <View style={{...styles.container, backgroundColor: darkTheme ? '#282C35':'white'}}>
        <InShortTabs />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default () => {
  return (
      <Context>
        <App />
      </Context>
  )
}
