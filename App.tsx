import React, { useState, useEffect } from "react";
import * as Font from "expo-font";

import { Provider } from "react-redux";
import { store } from "./store";
import { StyleProvider } from "native-base";
import { Ionicons } from "@expo/vector-icons";

//@ts-ignore
import getTheme from "./native-base-theme/components";
// @ts-ignore
import common from "./native-base-theme/variables/commonColor";

import Splash from "./pages/splash";
import Route from "./routes";

export default function App() {
  const [ready, setReady] = useState<boolean>(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    setReady(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <Provider store={store}>
      <StyleProvider style={getTheme(common)}>
        {ready ? <Route /> : <Splash />}
      </StyleProvider>
    </Provider>
  );
}
