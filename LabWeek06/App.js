import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";

export default function App() {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");

  const displayText = name || nim ? `${name} - ${nim}` : "Input Nama dan NIM";

  return (
    <View style={styles.container}>
      <Text>{displayText}</Text>
      <Input label="Nama" value={name} onChangeText={setName} />
      <Input
        label="NIM"
        value={nim}
        onChangeText={setNim}
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
