import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import { devConfig } from "./fbConfig";

// Below IF checks that we are not running any fb instance atm (avoids crashing)
if (firebase.apps.length === 0) {
  // initializes fb
  firebase.initializeApp(devConfig);
}
// React
import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
// disable log boxes for demo
LogBox.ignoreAllLogs();
// React-Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "./components/Main";
import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";

// Redux
import { Provider } from "react-redux";

import store from "./components/main/redux/store";

const Stack = createStackNavigator();

export const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (!loggedIn) {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          setLoggedIn(false);
          setLoaded(true);
        } else {
          setLoggedIn(true);
          setLoaded(true);
        }
      });
    }
  }, [loggedIn, loaded]);

  if (!loaded) {
    return <View style={{ flex: 1, justifyContent: "center" }}></View>;
  }
  if (!loggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LandingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

export default App;
