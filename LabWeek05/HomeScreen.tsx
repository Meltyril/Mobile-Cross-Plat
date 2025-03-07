import React, { useState } from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import userData from "./data.json";

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  // Filter user berdasarkan pencarian
  const filteredUsers = userData.filter((user) =>
    user.nama.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Cari user..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      {/* Daftar User */}
      <ScrollView>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <TouchableOpacity
              key={user.email}
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
          ))
        ) : (
          <Text style={styles.noResults}>User tidak ditemukan</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  searchBar: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
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
  noResults: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#888",
  },
});

export default HomeScreen;
