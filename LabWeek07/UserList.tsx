import React, { useEffect, useRef } from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
  ViewStyle,
} from "react-native";
import userData from "./data.json";

const { width } = Dimensions.get("window");

const UserList = ({ navigation }) => {
  // Buat array of animated values untuk setiap user
  const opacityAnims = useRef(
    userData.map(() => new Animated.Value(0))
  ).current;
  const translateXAnims = useRef(
    userData.map(() => new Animated.Value(-width))
  ).current;
  const scaleAnims = useRef(
    userData.map(() => new Animated.Value(0.8))
  ).current;

  useEffect(() => {
    // Animasi staggered untuk setiap user
    userData.forEach((_, index) => {
      // Delay berbeda untuk setiap user
      const delay = 120 * index;

      // Urutan animasi dengan sequence
      Animated.sequence([
        // Delay berdasarkan posisi item
        Animated.delay(delay),
        // Grup animasi yang berjalan bersamaan
        Animated.parallel([
          // Animasi opacity
          Animated.timing(opacityAnims[index], {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
            easing: Easing.out(Easing.quad),
          }),
          // Animasi slide dari kiri
          Animated.timing(translateXAnims[index], {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
            easing: Easing.out(Easing.back(1.5)),
          }),
          // Animasi scale
          Animated.timing(scaleAnims[index], {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
            easing: Easing.out(Easing.back(1.2)),
          }),
        ]),
      ]).start();
    });
  }, []);

  const renderUserItem = (user, index) => {
    return (
      <Animated.View
        key={user.email}
        style={{
          opacity: opacityAnims[index],
          transform: [
            { translateX: translateXAnims[index] },
            { scale: scaleAnims[index] },
          ],
        }}
      >
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            navigation.navigate("Profile", {
              userName: user.nama,
              userEmail: user.email,
              userImage: user.gambar,
            })
          }
          activeOpacity={0.7}
        >
          <Image source={{ uri: user.gambar }} style={styles.avatar} />
          <View style={styles.userInfo}>
            <Text style={styles.boldText}>{user.nama}</Text>
            <Text style={styles.emailText}>{user.email}</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {userData.map(renderUserItem)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContent: {
    padding: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    marginRight: 15,
    borderWidth: 2,
    borderColor: "#f0f0f0",
  },
  userInfo: {
    flex: 1,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    color: "#333",
  },
  emailText: {
    fontSize: 14,
    color: "#666",
  },
});

export default UserList;
