import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import DrawingCanvas from "./src/components/DrawingCanvas";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <DrawingCanvas />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
