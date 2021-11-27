// import { StatusBar } from "expo-status-bar";
import React from "react";
// import tw from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import { AuthProvider } from "./hooks/useAuth";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
// <View style={tw("flex-1 justify-center items-center")}>
// <Text>Hello World! NICE</Text>
// <Button title="Click Me" />
// <StatusBar style="auto" />
// </View>

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// backgroundColor: "#fff",
// alignItems: "center",
// justifyContent: "center",
// },
// });
