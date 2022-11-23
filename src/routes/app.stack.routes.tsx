import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Teste } from "../screens/Teste";

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen component={Home} name="Home" />
      <Screen component={Teste} name="Teste" />
    </Navigator>
  );
}
