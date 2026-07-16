import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { CommonActions } from "@react-navigation/native";

import { BottomTabNavigation } from "./BottomTabNavigation";

const Drawer = createDrawerNavigator();

const DrawerContent = ({ navigation }) => {
  const MenuItem = ({ title, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Text style={styles.menuText}>{title}</Text>
    </TouchableOpacity>
  );

  // Common Navigation Handler
  const handleNavigation = (screen, params = {}) => {
    navigation.navigate(screen, params);
    navigation.closeDrawer();
  };

  // Logout Handler
  const handleLogout = () => {
    navigation.closeDrawer();

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Login" }],
      })
    );
  };

  return (
    <DrawerContentScrollView
      contentContainerStyle={styles.drawerContainer}
    >
      {/* Profile */}
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://i.pravatar.cc/150?img=12",
          }}
          style={styles.profileImage}
        />

        <Text style={styles.name}>Krishna Rajkumar</Text>
        <Text style={styles.email}>krishna@gmail.com</Text>
      </View>

      {/* Menu */}
      <MenuItem
        title="🏠 Dashboard"
        onPress={() =>
          handleNavigation("MainTabs", {
            screen: "Home",
          })
        }
      />

      <MenuItem
        title="🛒 Cart"
        onPress={() => handleNavigation("CartScreen")}
      />

      <MenuItem
        title="👤 Profile"
        onPress={() => handleNavigation("Profile")}
      />

      <MenuItem
        title="📦 Orders"
        onPress={() => handleNavigation("Orders")}
      />

      <MenuItem
        title="⚙️ Settings"
        onPress={() => handleNavigation("Settings")}
      />

      <View style={styles.divider} />

      <MenuItem
        title="🚪 Logout"
        onPress={handleLogout}
      />
    </DrawerContentScrollView>
  );
};

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="MainTabs"
        component={BottomTabNavigation}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },

  profileContainer: {
    alignItems: "center",
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginBottom: 15,
  },

  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },

  email: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },

  menuItem: {
    paddingVertical: 18,
    paddingHorizontal: 25,
  },

  menuText: {
    fontSize: 17,
    color: "#333",
    fontWeight: "500",
  },

  divider: {
    height: 1,
    backgroundColor: "#e5e5e5",
    marginVertical: 15,
  },
});