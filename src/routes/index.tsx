import React from "react";
import Toast from "react-native-toast-message";
import { NavigationContainer } from "@react-navigation/native";

import { toastConfig } from "../utils/ToastConfig/toastConfig";
import { AppTabRoutes } from "./app.tab.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppTabRoutes />
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
}

export default Routes;
