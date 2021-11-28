import { View, Text, Button, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { logout, user } = useAuth();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      {/* Header */}
      <View></View>
      {/* End of Header */}
      <Text>I am the home screen</Text>
      <Button title="Go to Chat" onPress={() => navigation.navigate("Chat")} />
      <Button title="Sign Out" onPress={logout} />
    </SafeAreaView>
  );
};

export default HomeScreen;
