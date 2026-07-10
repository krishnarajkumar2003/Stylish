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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F83758' }} edges={['left', 'right', 'top', 'bottom']}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <StackNavigation />
    </SafeAreaView>
  );
}

export default App;
