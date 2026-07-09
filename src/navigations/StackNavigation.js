import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "../screens/SplashScreen/SplashScreen"
import {OnboardingScreen} from '../screens/OnboardingScreen/OnboardingScreen'
const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Splash" component={SplashScreen} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{
                        headerShown: false
                    }} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}