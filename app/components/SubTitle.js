import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SubTitle = ({ title }) => (
  <View>
    <Text style={styles.subTitleText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  subTitleText: { fontSize: 18, fontWeight: "bold", color: "#3f4e66" }
});

export default SubTitle;
