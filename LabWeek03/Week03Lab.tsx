import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

const Week03Lab = () => {
  const [angka, setAngka] = useState(0);
  const [nama, setNama] = useState("Anonymous");

  const tambahAngka = () => setAngka(angka + 1);
  const kurangAngka = () => setAngka(angka - 1);
  const resetAngka = () => setAngka(0);

  return (
    <View style={styles.container}>
      <Text style={styles.textNama}>Halo nama saya {nama || "Anonymous"}!</Text>
      <Text style={styles.text}>Umur saya {angka} sekarang</Text>

      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={tambahAngka} />
        <Button title="Decrement" onPress={kurangAngka} />
        <Button title="Reset" onPress={resetAngka} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Masukkan Nama Disini"
        onChangeText={(text) => setNama(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  textNama: {
    fontSize: 23,
  },
  buttonContainer: {
    gap: 10,
  },
  input: {
    marginTop: 20,
    padding: 10,
    width: 200,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    textAlign: "center",
  },
});

export default Week03Lab;
