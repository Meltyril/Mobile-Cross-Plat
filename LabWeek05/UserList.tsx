import React from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import userData from "./data.json";

const UserList = ({ navigation }) => {
  return (
    <ScrollView>
      {userData.map((user) => {
        return (
          <TouchableOpacity
            key={user.email} // Ganti NIM dengan email karena tidak ada NIM
            style={styles.card}
            onPress={() =>
              navigation.navigate("Profile", {
                userName: user.nama,
                userEmail: user.email,
                userImage: user.gambar,
              })
            }
          >
            <Image source={{ uri: user.gambar }} style={styles.avatar} />
            <View>
              <Text style={styles.boldText}>{user.nama}</Text>
              <Text>{user.email}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default UserList;
