
import { Fragment, useState } from "react";
import { toDoProps } from "../store/todo-store";
import classes from "./TodoList.module.scss";
import List from "../Layout/List";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const TodoList = () => {
  // const [toDoList, setToDoList] = useState<toDoProps[]>([]);
  const toDoList = useSelector((state: RootState) => state.toDos)

  return (
    <ul className={classes["todo-list"]}>
      {toDoList.length === 0 ? (
        <li className={classes["empty-list"]}>
          ToDo List가 존재하지 않습니다. <br /> Add New ToDo를 클릭하여 ToDo를
          추가하여주세요!
        </li>
      ) : (
        <Fragment>
          {toDoList.map((todo) => {
            return (
              <List todos={todo} key={todo.id} />
            );
          })}
        </Fragment>
      )}
    </ul>
  );
};

export default TodoList;
