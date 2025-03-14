import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";

interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChangeText,
  keyboardType = "default",
}) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        placeholder={`Input ${label}..`}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default Input;
