import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>To-do List</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 70,
    marginBottom: 40
  },
  headerText: { fontSize: 26, fontWeight: "bold", color: "#3f4e66" }
});

export default Header;
