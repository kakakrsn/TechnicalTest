/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import Router from "./Router";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return(
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </>
  )
}

export default App