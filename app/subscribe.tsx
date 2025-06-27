import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SubscribeScreen() {
  const [email, setEmail] = useState("");

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubscribe = () => {
    Alert.alert("Subscribed!", "Thank you for subscribing.");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/little-lemon-logo-grey.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>
        Subscribe to our newsletter for our{"\n"}latest delicious recipes
      </Text>

      <TextInput
        placeholder="Enter your email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: isValidEmail(email) ? "#006600" : "#aaa" },
          ]}
          onPress={handleSubscribe}
          disabled={!isValidEmail(email)}
        >
          <Text style={styles.buttonText}>Subscribe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 30,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  buttonWrapper: {
    paddingBottom: 30,
    alignItems: "center",
  },
  button: {
    width: "100%",
    backgroundColor: "#006600",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
