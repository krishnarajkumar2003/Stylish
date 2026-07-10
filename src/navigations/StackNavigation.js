import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "../screens/SplashScreen/SplashScreen"
import {OnboardingScreen} from '../screens/OnboardingScreen/OnboardingScreen'
import {LoginScreen} from "../screens/LoginScreen/LoginScreen"
import {GetStartedScreen} from "../screens/GetStartedScreen/GetStartedScreen"
import {DashboardScreen} from "../screens/DashboardScreen/DashboardScreen"
import {CustomHeader} from "../components/CustomHeader"

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Splash" component={SplashScreen} options={{
                        headerShown: false,
                    }} />
                    <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name="Login" component={LoginScreen} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name="GetStarted" component={GetStartedScreen} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name="Dashboard" component={DashboardScreen} options={{
                        header: (prop) => <CustomHeader />
                    }} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}