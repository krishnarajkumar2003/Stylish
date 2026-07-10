import React, { useCallback } from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { CustomButton } from '../../components/CustomButton';

const { width } = Dimensions.get('window');

export const GetStartedScreen = ({navigation}) => {

  const goToDashboard = useCallback(
    () => {
      navigation.replace("Dashboard")
    },[]
  )

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require('../../../assets/images/get.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Dark overlay gradient effect at the bottom for text readability */}
        <View style={styles.overlay}>
          <View style={styles.content}>
            
            <Text style={styles.title}>
              You want{'\n'}Authentic, here{'\n'}you go!
            </Text>
            
            <Text style={styles.subtitle}>
              Find it here, buy it now!
            </Text>
            
            <CustomButton 
              style={styles.button} 
              activeOpacity={0.8}
              onPress={goToDashboard}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </CustomButton>

          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    // Smooth dark fade from top (transparent) to bottom (darker)
    backgroundColor: 'rgba(0, 0, 0, 0.35)', 
    justifyContent: 'flex-end',
  },
  content: {
    paddingHorizontal: 30,
    paddingBottom: 50, // Adjust based on your safe area needs
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 44,
    marginBottom: 12,
    fontFamily: 'System', // Replace with custom font if needed (e.g., Montserrat or Inter)
  },
  subtitle: {
    color: '#F0F0F0',
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#FA3E5C', // The vibrant pink/red from the screenshot
    width: width - 60, // Full width minus the horizontal paddings
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, // Shadow for Android
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
});