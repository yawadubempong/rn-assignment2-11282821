import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        My name is <Text style={styles.nameStyle}>Bempong Adu Yaw!</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "black",
    fontSize: 24,
  },

  nameStyle: {
    fontWeight: "bold",
  },
});
