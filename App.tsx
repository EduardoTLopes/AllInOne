import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Appearance, useColorScheme } from "react-native";
import AnimatedStyleUpdateExample from "./app/animated";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "CooperHewitt-Bold": require("./assets/fonts/CooperHewitt-Bold.otf"),
  });
  let colorScheme = useColorScheme();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if (colorScheme === "dark") {
    console.log(colorScheme);
  } else {
    console.log(colorScheme);
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{ fontFamily: "CooperHewitt-Bold", fontSize: 30 }}>
        Cooper Hewitt Bold
      </Text>
      <Text style={{ fontSize: 30 }}>Platform Default</Text>
      <AnimatedStyleUpdateExample />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "CooperHewitt-Bold",
  },
});
