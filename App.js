/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { StyleSheet, View } from "react-native";
import Checkmark from "./assets/checkmark.svg";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEFD5"
  },
  logo: {
    color: "green"
  }
});

const App = () => (
  <View style={styles.container}>
    <Checkmark style={styles.logo} />
  </View>
);

export default App;
