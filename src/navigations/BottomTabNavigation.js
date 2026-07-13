import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { DashboardScreen } from "../screens/DashboardScreen/DashboardScreen";
import { ShoppingBagScreen } from "../screens/ShoppingBagScreen/ShoppingBagScreen";
import { LoginScreen } from "../screens/LoginScreen/LoginScreen";
import { GetStartedScreen } from "../screens/GetStartedScreen/GetStartedScreen";
import { CustomHeader } from "../components/CustomHeader"
const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={DashboardScreen} options={{
        headerShown: true,
        header: (prop) => <CustomHeader {...prop} showMenu showLogo showProfile/>
      }} />
    </Tab.Navigator>
  );
};