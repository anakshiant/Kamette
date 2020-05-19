import React from "react";
import { Container, Text, Button, Input, View } from "native-base";
import { StyleSheet, StatusBar } from "react-native";
import Logo from "../../components/shared/Logo";
import { useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "../../routes/auth";
import { StackNavigationProp } from "@react-navigation/stack";

type LoginNavigation = StackNavigationProp<AuthStackParamList, "Login">;

const Login: React.FC = () => {
  const navigation = useNavigation<LoginNavigation>();
  return (
    <Container>
      <StatusBar backgroundColor="white" />
      <View style={style.body}>
        <View style={style.form}>
          <Logo />
          <Input placeholder="Mobile Number" keyboardType="phone-pad" />
          <Input placeholder="Password" />
          <Button block onPress={() => navigation.navigate("Otp")}>
            <Text>Login</Text>
          </Button>
          <Button transparent block>
            <Text>Forgot Password?</Text>
          </Button>
        </View>
        <View style={style.signup}>
          <Button block onPress={() => navigation.navigate("SignUp")}>
            <Text> New User? Sign Up</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default Login;

const style = StyleSheet.create({
  form: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  signup: {
    display: "flex",
    width: "100%",
  },
  body: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
    padding: 20,
  },
});
