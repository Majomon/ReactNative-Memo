import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Card from "./Card";

const cards = ["😃", "🚀", "🌈", "🐶", "🍕", "🐬"];

export default function App() {
  const [board, setBoard] = React.useState(() => shuffle([...cards, ...cards]));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Memo</Text>
      {board.map((card, index) => {
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

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}
