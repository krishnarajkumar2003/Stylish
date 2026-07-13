import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomTabNavigation } from "./BottomTabNavigation";

import { ProductDetailsScreen } from "../screens/ProductDetailsScreen/ProductDetailsScreen";
import { CheckOutScreen } from "../screens/CheckOutScreen/CheckOutScreen";

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Drawer.Screen
        name="MainTabs"
        component={BottomTabNavigation}
        options={{
          drawerItemStyle: { display: "none" },
        }}

      />
    </Drawer.Navigator>
  );
};