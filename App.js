/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { BackHandler, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { SplashScreen } from './src/screens/SplashScreen/SplashScreen.js'
import { StackNavigation } from './src/navigations/StackNavigation.js'
import { useEffect } from 'react';
import { LoaderProvider } from "./src/context/LoaderContext.js"

console.log = () => { };
console.warn = () => { };
console.error = () => { };
console.info = () => { };
console.debug = () => { };
console.trace = () => { };


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(
    () => {
      const back = BackHandler.addEventListener('hardwareBackPress', () => {
        return true
      })
      return () => back.remove();
    }, []
  )
  return (
    <LoaderProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right', 'top', 'bottom']}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <StackNavigation />
      </SafeAreaView>
    </LoaderProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F83758',
  },
});

export default App;
