import React from "react";
import { Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { DashboardScreen } from "../screens/DashboardScreen/DashboardScreen";
import { CustomHeader } from "../components/CustomHeader";
import {CartScreen} from "../screens/CartScreen/CartScreen"
import HomeIcon from "../../assets/icons/home.svg";
import CartIcon from "../../assets/icons/cart.svg"
import ProfileIcon from "../../assets/images/profile.svg"
import { ProfileScreen } from "../screens/ProfileScreen/ProfileScreen";

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: "#fff",
        },

        tabBarButton: (props) => (
          <Pressable
            {...props}
            android_ripple={null}
            style={({ pressed }) => [
              props.style,
              {
                opacity: 1, // Prevent opacity change
              },
            ]}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          headerShown: true,
          header: (props) => (
            <CustomHeader
              {...props}
              showMenu
              showLogo
              showProfile
            />
          ),
          tabBarIcon: ({ size, focused }) => (
            <HomeIcon
              width={size}
              height={size}
              fill={focused ? "#000" : "#999"}
            />
          ),
          tabBarLabelStyle: {
            color: 'red',
            fontSize: 13
          }
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <CartIcon
              width={size}
              height={size}
              fill={focused ? "#000" : "#999"}
            />
          ),
          tabBarLabelStyle: {
            color: 'red',
            fontSize: 13
          }
        }}
      />
      <Tab.Screen
        name="ProfileBot"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <ProfileIcon
              width={size}
              height={size}
              fill={focused ? "#000" : "#999"}
            />
          ),
          tabBarLabelStyle: {
            color: 'red',
            fontSize: 13
          },
          tabBarLabel: "Profile"
        }}
      />
    </Tab.Navigator>
  );
};