import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./component/Layout/Header";
import Main from "./component/Layout/Main";
import ImportantTodos from "./component/Todo/ImpotantTodos";
import NewTodo from "./component/Todo/NewTodo";
import TodoList from "./component/Todo/TodoList";
import Card from "./component/UI/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Card>
        <main>
          <Switch>
            <Route path='/' exact>
              <Main />
            </Route>
            <Route path='/todo-list' exact>
              <TodoList />
            </Route>
            <Route path='/new-todo' exact>
              <NewTodo />
            </Route>
            <Route path='/important-todo' exact>
              <ImportantTodos />
            </Route>
          </Switch>
        </main>
      </Card>
    </div>
  );
}

export default App;
