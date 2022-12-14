import React from "react";
import Todo from "./todo";
import { TodoForm } from "./todoform";

export class TodoList extends React.Component {
  state = {
    todos: [],
    todosToShow: "all",
    toggleAllComplete: true,
  };

  addTodo = (todo) => {
    this.setState((state) => ({ todos: [todo, ...state.todos] }));
  };

  toggleComplete = (id) => {
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    }));
  };

  updateTodoToShow = (string) => {
    this.setState({
      todosToShow: string,
    });
  };

  handleDeleteTodo = (id) => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  };

  removeCompleteTodos = () => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => !todo.complete),
    }));
  };

  render() {
    let todos = [];

    if (this.state.todosToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todosToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todosToShow === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            toggleComplete={() => {
              this.toggleComplete(todo.id);
            }}
            onDelete={() => {
              this.handleDeleteTodo(todo.id);
            }}
            todo={todo}
          />
        ))}
        <div>
          Todos left :{this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <div>
          <button onClick={() => this.updateTodoToShow("all")}>All</button>
          <button onClick={() => this.updateTodoToShow("active")}>
            Active
          </button>
          <button onClick={() => this.updateTodoToShow("complete")}>
            Complete
          </button>
        </div>
        {this.state.todos.some((todo) => todo.complete) ? (
          <div>
            <button onClick={() => this.removeCompleteTodos}>
              Remove complete Todos
            </button>
          </div>
        ) : null}

        <div>
          <button
            onClick={() =>
              this.setState((state) => ({
                todos: state.todos.map((todo) => ({
                  ...todo,
                  complete: state.toggleAllComplete,
                })),
                toggleAllComplete: !state.toggleAllComplete,
              }))
            }
          >
            Toogle All: {`${this.state.toggleAllComplete}`}
          </button>
        </div>
      </div>
    );
  }
}
