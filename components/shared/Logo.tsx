import React from "react";
import { Image, StyleSheet } from "react-native";

const Logo: React.FC = () => {
  return (
    <Image
      source={require("../../assets/images/logo.png")}
      style={style.logo}
    />
  );
};

export default Logo;

const style = StyleSheet.create({
  logo: {
    height: 150,
    width: 150,
    borderRadius: 50,
  },
});
