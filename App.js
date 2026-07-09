/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { SplashScreen } from './src/screens/SplashScreen/SplashScreen.js'
import { StackNavigation } from './src/navigations/StackNavigation.js'
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F83758' }} edges={['left', 'right', 'top', 'bottom']}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <StackNavigation />
    </SafeAreaView>
  );
}

export default App;
