import React from "react";
import { Button, Text, View, Image, StyleSheet } from "react-native";

const Profile = ({ navigation, route }) => {
  const { userName, userEmail, userImage } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: userImage }} style={styles.avatar} />
      <Text style={styles.boldText}>{userName}'s Profile</Text>
      <Text style={styles.namaText}>{userName}</Text>
      <Text style={styles.namaEmail}>{userEmail}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  namaText: {
    fontWeight: "condensed",
    fontSize: 15,
    marginBottom: 0,
  },
  namaEmail: {
    marginBottom: 11,
  },
});

export default Profile;
