import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SplashScreen } from "../screens/SplashScreen/SplashScreen";
import { OnboardingScreen } from "../screens/OnboardingScreen/OnboardingScreen";
import { LoginScreen } from "../screens/LoginScreen/LoginScreen";
import { GetStartedScreen } from "../screens/GetStartedScreen/GetStartedScreen";
import { DrawerNavigation } from "./DrawerNavigation";
import { ProductDetailsScreen } from "../screens/ProductDetailsScreen/ProductDetailsScreen";
import { CustomHeader } from "../components/CustomHeader";
import { ShoppingBagScreen } from "../screens/ShoppingBagScreen/ShoppingBagScreen";
import { CheckOutScreen } from "../screens/CheckOutScreen/CheckOutScreen";

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStartedScreen}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={{
            headerShown: true,
            header: (prop) => <CustomHeader {...prop} showBackBtn />
          }}
        />
        
        <Stack.Screen
          name="ShoppingBag"
          component={ShoppingBagScreen}
          options={{
            headerShown: true,
            header: (prop) => <CustomHeader {...prop} showBackBtn title="Shopping Bag"/>
          }}
        />

        <Stack.Screen
          name="CheckOut"
          component={CheckOutScreen}
          options={{
            headerShown: true,
            header: (prop) => <CustomHeader {...prop} showBackBtn />
          }}
        />

        {/* Main App Shell */}
        <Stack.Screen
          name="Main"
          component={DrawerNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};