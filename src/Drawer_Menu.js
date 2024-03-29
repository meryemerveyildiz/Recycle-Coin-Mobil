import * as React from "react";
import { Button, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home_Screen";
import Money_Transfer from "./Money_Transfer";
import Profile from "./Profile";
import Qr from "./Qr";
import SSS from "./SSS";
import Logout from "./Logout";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Money Transfer" component={Money_Transfer} />
        <Drawer.Screen name="Qr" component={Qr} />
        <Drawer.Screen name="Recycle" component={SSS} />
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
