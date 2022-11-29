/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { useTheme } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MedicineSvg from "../assets/medicine.svg";
import CalendarSvg from "../assets/calendar.svg";
import HomeSvg from "../assets/home.svg";

import MedicineFillSvg from "../assets/medicineFill.svg";
import CalendarFillSvg from "../assets/calendarFill.svg";
import HomeFillSvg from "../assets/homeFill.svg";

import { MyMedicines } from "../screens/MyMedicines";
import { Schedules } from "../screens/Schedules";
import { AppStackRoutes } from "./app.stack.routes";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.gray1,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 10,
          marginTop: -8,
          marginBottom: 8,
        },
      }}
    >
      <Screen
        name="Meus Remédios"
        component={MyMedicines}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MedicineFillSvg width={20} height={20} />
            ) : (
              <MedicineSvg width={20} height={20} />
            ),
        }}
      />

      <Screen
        name="Home"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HomeFillSvg width={24} height={24} />
            ) : (
              <HomeSvg width={24} height={24} />
            ),
        }}
      />

      <Screen
        name="Agenda"
        component={Schedules}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <CalendarFillSvg width={18} height={18} />
            ) : (
              <CalendarSvg width={18} height={18} />
            ),
        }}
      />
    </Navigator>
  );
}
