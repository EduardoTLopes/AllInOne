import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
      <Link asChild href="/login">
        <Pressable>
          <Text>Go to Login</Text>
        </Pressable>
      </Link>
    </View>
  );
}
