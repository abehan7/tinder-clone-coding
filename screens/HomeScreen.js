import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import useAuth from "../hooks/useAuth";
import tw from "tailwind-rn";
import { Ionicons } from "@expo/vector-icons";

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
      <View style={tw("items-center relative")}>
        <TouchableOpacity style={tw("absolute left-5 top-3")} onPress={logout}>
          <Image
            style={tw("h-10 w-10 rounded-full")}
            source={{ uri: user.photoURL }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={tw("h-14 w-14 ")} source={require("../logo.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw("absolute right-5 top-3")}
          onPress={() => navigation.navigate("Chat")}
        >
          <Ionicons name="chatbubbles-sharp" size={30} color="black" />
        </TouchableOpacity>
      </View>
      {/* End of Header */}
      {/* Home Swipe Stack Card */}
      <View>
        <Image
          style={tw("m-2 self-center rounded-2xl w-11/12 h-5/6")}
          source={{
            uri: "https://www.kolpaper.com/wp-content/uploads/2020/11/Minimal-Mobile-Wallpaper.jpg",
          }}
        />
        <Text
          style={tw("absolute bottom-32 left-10 text-white font-bold text-xl")}
        >
          Oskar Klonowski
        </Text>
      </View>
      {/* End of Home Swipe Stack Card */}
      {/* Bottom Controls */}
      <View style={tw("flex flex-row justify-evenly ")}>
        <TouchableOpacity
          style={tw(
            "items-center justify-center rounded-full w-16 h-16 bg-red-200"
          )}
        >
          <Ionicons name="chatbubbles-sharp" size={30} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw(
            "items-center justify-center rounded-full w-16 h-16 bg-green-200"
          )}
        >
          <Ionicons name="chatbubbles-sharp" size={30} color="green" />
        </TouchableOpacity>
      </View>
      {/* End of Bottom Controls */}
    </SafeAreaView>
  );
};

export default HomeScreen;
