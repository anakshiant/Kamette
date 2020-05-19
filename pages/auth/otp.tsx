import React from "react";
import { Container, Text, Button, Input, View } from "native-base";
import { StyleSheet, StatusBar } from "react-native";
import Logo from "../../components/shared/Logo";
import { COLOR } from "../../utils";

const Otp: React.FC = () => {
  return (
    <Container>
      <StatusBar backgroundColor="white" />
      <View style={style.body}>
        <View style={style.form}>
          <Logo />
          <Text style={{ fontWeight: "bold", fontSize: 20, lineHeight: 40 }}>
            OTP Verification
          </Text>
          <Text style={{ color: COLOR.TEXT, marginBottom: 50 }}>
            Enter the OTP sent to your contact number?
          </Text>
          <Input placeholder="Verify" keyboardType="number-pad" />
          <View style={style.buttons}>
            <Text style={{ color: COLOR.TEXT }}>Did not recieve the OTP?</Text>
            <Button transparent small>
              <Text>Resend</Text>
            </Button>
          </View>
          <Button block>
            <Text>Submit</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default Otp;

const style = StyleSheet.create({
  form: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
    marginBottom: 20,
  },
  body: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
    padding: 20,
  },
});
