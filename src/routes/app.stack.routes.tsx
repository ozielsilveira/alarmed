import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/Login";
import { SignUp } from "../screens/SignUp";
import { ForgotPassword } from "../screens/ForgotPassword";

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen component={Login} name="Login" />
      <Screen component={SignUp} name="SignUp" />
      <Screen component={ForgotPassword} name="ForgotPassword" />
    </Navigator>
  );
}
