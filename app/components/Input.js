import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = ({ value, changeText, addTodoItem }) => (
  <TextInput
    value={value}
    onChangeText={changeText}
    onEndEditing={addTodoItem}
    style={styles.input}
    placeholder={"오늘의 할 일"}
    maxLength={30}
    returnKeyType="done"
  />
);

const styles = StyleSheet.create({
  input: {
    fontSize: 25,
    paddingTop: 15
  }
});

export default Input;
