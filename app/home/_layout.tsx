import { Slot } from "expo-router";
import { Text, View } from "react-native";

function Header() {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "#f0f0f0",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Header</Text>
    </View>
  );
}

function Footer() {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "#f0f0f0",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Footer</Text>
    </View>
  );
}

export default function HomeLayout() {
  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  );
}
