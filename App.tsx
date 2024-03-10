import React from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import Home from './src/views/Home';

function App(): React.JSX.Element {
  return (
    <>
      {Platform.OS === 'android' && (
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      )}
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
  },
});

export default App;
