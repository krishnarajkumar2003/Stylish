import { StyleSheet, View } from 'react-native'
import Logo from '../../../assets/images/logo.svg'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback, useEffect } from 'react'
export const SplashScreen = ({ navigation }) => {
    useEffect(
        () => {
            const timer = setTimeout(() => {
                navigation.replace('Onboarding')
            }, 3000);

            return () => clearTimeout(timer)
        }, []
    )
    return (
        <>
            <View style={styles.screen}>
                <Logo />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    }
})