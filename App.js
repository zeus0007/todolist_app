import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./app/components/Header";
import SubTitle from "./app/components/SubTitle";
import Input from "./app/components/InputBox";
import TodoItem from "./app/components/TodoItem";

export default class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          title1: "아아아아아아아"
        },
        {
          title1: "일찍 일어날래"
        }
      ]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerCentered}>
          <Header />
        </View>
        <View style={styles.subContainer}>
          <SubTitle title="해야 할 일" />
          <Input />
        </View>
        <View style={styles.listContainer}>
          <SubTitle title="해야 할 일 목록" />
          <TodoItem text="코딩하기" />
          <TodoItem text={this.state.todos[0].title1} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerCentered: {
    alignItems: "center"
  },
  subContainer: {
    marginLeft: 20
  },
  listContainer: {
    marginTop: 30,
    marginLeft: 20
  }
});
