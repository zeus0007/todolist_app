import React from "react";
import { StyleSheet, View, FlatList, AsyncStorage } from "react-native";
import Header from "./app/components/Header";
import SubTitle from "./app/components/SubTitle";
import Input from "./app/components/Input";
import TodoItem from "./app/components/TodoItem";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      todos: []
    };
  }
  //
  componentWillMount() {
    this.getData();
  }
  storeData = () => {
    AsyncStorage.setItem("@todo:state", JSON.stringify(this.state));
  };
  getData = () => {
    AsyncStorage.getItem("@todo:state").then(state => {
      if (state !== null) {
        this.setState(JSON.parse(state));
      }
    });
  };
  _makeTodoItem = ({ item, index }) => {
    return (
      <TodoItem
        text={item.title}
        iscomplete={item.iscomplete}
        changeComplete={() => {
          const newTodo = [...this.state.todos];
          newTodo[index].iscomplete = !newTodo[index].iscomplete;
          this.setState({ todos: newTodo }, this.storeData);
        }}
        deleteItem={() => {
          const newTodo = [...this.state.todos];
          newTodo.splice(index, 1);
          this.setState({ todos: newTodo }, this.storeData);
        }}
      />
    );
  };
  _changeText = value => {
    this.setState({ inputValue: value });
  };
  _addTodoItem = () => {
    if (this.state.inputValue !== "") {
      const prevTodo = this.state.todos;

      const newTodo = { title: this.state.inputValue, iscomplete: false };

      this.setState(
        {
          inputValue: "",
          todos: prevTodo.concat(newTodo)
        },
        this.storeData
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerCentered}>
          <Header />
        </View>
        <View style={styles.subContainer}>
          <SubTitle title="해야 할 일" />
          <Input
            value={this.state.inputValue}
            changeText={this._changeText}
            addTodoItem={this._addTodoItem}
          />
        </View>
        <View style={styles.listContainer}>
          <SubTitle title="해야 할 일 목록" />

          <FlatList
            data={this.state.todos}
            renderItem={this._makeTodoItem}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
          />
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
