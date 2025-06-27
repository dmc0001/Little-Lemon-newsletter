import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../assets/images/little-lemon-logo.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text}>
          Little Lemon, your local{"\n"}Mediterranean Bistro
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/subscribe")}
        >
          <Text style={styles.buttonText}>Newsletter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 60,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
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
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
  },
});
