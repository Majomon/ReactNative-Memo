import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function Card({ onPress, isTurnedOver, children }) {
  return (
    <Pressable>
      <Text>{children}</Text>
    </Pressable>
  );
}
