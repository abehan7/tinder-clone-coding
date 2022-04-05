// import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
// import tw from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./components/StackNavigator";
import { AuthProvider } from "./hooks/useAuth";
import { getComments } from "./api";

export default function App() {
  useEffect(() => {
    const fn = async () => {
      await getComments();
    };
    fn();
  }, []);
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
