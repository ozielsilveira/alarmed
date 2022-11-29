import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/Login";
import { SignUp } from "../screens/SignUp";
import { ForgotPassword } from "../screens/ForgotPassword";
import { Home } from "../screens/Home";
import { MyMedicines } from "../screens/MyMedicines";
import { Schedules } from "../screens/Schedules";

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen component={Home} name="Home" />
      <Screen component={MyMedicines} name="MyMedicines" />
      <Screen component={Schedules} name="Schedules" />
    </Navigator>
  );
}
