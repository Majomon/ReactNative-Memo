import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Card from "./Card";

const cards = ["😃", "🚀", "🌈", "🐶", "🍕", "🐬"];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Memo</Text>
      {cards.map((card, index) => {
        return <Card key={index}>{card}</Card>;
      })}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
    backgroundColor: "#0f172a",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 32,
    fontWeight: "900",
  },
});
