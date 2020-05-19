import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import Auth from "./auth";

const Route: React.FC = () => {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
};

export default Route;
