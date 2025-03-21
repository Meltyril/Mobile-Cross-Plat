import React, { useEffect, useRef } from "react";
import {
  Button,
  Text,
  View,
  Image,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
} from "react-native";

const { height } = Dimensions.get("window");

const Profile = ({ navigation, route }) => {
  const { userName, userEmail, userImage } = route.params;

  const slideAnim = useRef(new Animated.Value(height)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const avatarAnim = useRef(new Animated.Value(30)).current;
  const titleAnim = useRef(new Animated.Value(30)).current;
  const nameAnim = useRef(new Animated.Value(30)).current;
  const emailAnim = useRef(new Animated.Value(30)).current;
  const buttonAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.out(Easing.cubic),
    }).start();

    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    const animateElement = (animValue, delay) => {
      Animated.timing(animValue, {
        toValue: 0,
        duration: 400,
        delay,
        useNativeDriver: true,
        easing: Easing.out(Easing.back(1.5)),
      }).start();
    };

    animateElement(avatarAnim, 200);
    animateElement(titleAnim, 300);
    animateElement(nameAnim, 400);
    animateElement(emailAnim, 500);
    animateElement(buttonAnim, 600);
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY: slideAnim }],
          opacity: opacityAnim,
        },
      ]}
    >
      <Animated.View
        style={{
          transform: [{ translateY: avatarAnim }],
          opacity: opacityAnim,
        }}
      >
        <Image source={{ uri: userImage }} style={styles.avatar} />
      </Animated.View>

      <Animated.Text
        style={[
          styles.boldText,
          { transform: [{ translateY: titleAnim }], opacity: opacityAnim },
        ]}
      >
        {userName}'s Profile
      </Animated.Text>

      <Animated.Text
        style={[
          styles.namaText,
          { transform: [{ translateY: nameAnim }], opacity: opacityAnim },
        ]}
      >
        {userName}
      </Animated.Text>

      <Animated.Text
        style={[
          styles.namaEmail,
          { transform: [{ translateY: emailAnim }], opacity: opacityAnim },
        ]}
      >
        {userEmail}
      </Animated.Text>

      <Animated.View
        style={{
          transform: [{ translateY: buttonAnim }],
          opacity: opacityAnim,
          marginTop: 10,
        }}
      >
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 8,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
    color: "#333",
  },
  namaText: {
    fontSize: 18,
    marginBottom: 6,
    color: "#555",
  },
  namaEmail: {
    fontSize: 16,
    marginBottom: 25,
    color: "#777",
  },
});

export default Profile;
