import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./component/Layout/Header";
import Main from "./component/Layout/Main";
import { loggedIn, loggedOut } from "./component/store/login-store";
import EditTodo from "./component/Todo/EditTodo";
import ImportantTodos from "./component/Todo/ImpotantTodos";
import NewTodo from "./component/Todo/NewTodo";
import TodoDetail from "./component/Todo/TodoDetail";
import TodoList from "./component/Todo/TodoList";
import Card from "./component/UI/Card";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (userName) {
      dispatch(loggedIn());
    } else {
      dispatch(loggedOut());
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <Card>
        <main>
          <Switch>
            <Route path='/todo-project' exact>
              <Main />
            </Route>
            <Route path='/todo-project/todo-list' exact>
              <TodoList />
            </Route>
            <Route path='/todo-project/todo-list/:id' exact>
              <TodoDetail />
            </Route>
            <Route path='/todo-project/new-todo' exact>
              <NewTodo />
            </Route>
            <Route path='/todo-project/important-todo' exact>
              <ImportantTodos />
            </Route>
            <Route path='/todo-project/edit-todo/:id' exact>
              <EditTodo />
            </Route>
          </Switch>
        </main>
      </Card>
    </div>
  );
}

export default App;
