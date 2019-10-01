import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const TodoItem = ({ text, iscomplete, changeComplete, deleteItem }) => (
  <View style={styles.todoContainer}>
    <View style={styles.makerow}>
      <TouchableOpacity onPress={changeComplete}>
        <AntDesign
          name={iscomplete ? "checkcircle" : "downcircleo"}
          size={20}
          style={styles.checkbtn}
        />
      </TouchableOpacity>
      <Text style={styles.todoitem}>{text}</Text>
    </View>
    <TouchableOpacity onPress={deleteItem}>
      <AntDesign name="close" size={20} />
    </TouchableOpacity>
  </View>
);

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  todoContainer: {
    padding: 5,
    marginTop: 30,
    borderBottomWidth: 1,
    width: width - 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  todoitem: {
    fontSize: 20,
    fontWeight: "bold"
  },
  checkbtn: {
    marginRight: 20
  },
  makerow: {
    flexDirection: "row"
  }
});

export default TodoItem;
