import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/auth/login";
import SignUp from "../pages/auth/signup";
import Otp from "../pages/auth/otp";

export type AuthStackParamList = {
  Login: {};
  Otp: {};
  SignUp: {};
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const Auth: React.FC = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="Otp" component={Otp} />
    </AuthStack.Navigator>
  );
};

export default Auth;
