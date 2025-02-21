import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Week03Lab from "./Week03Lab";

export default function App() {
  return (
    <View style={styles.container}>
      <Week03Lab />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
