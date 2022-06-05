import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../store/store";
import { removeTodo, toDoProps } from "../store/todo-store";
import classes from "./TodoList.module.scss";
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

const TodoList = () => {
  const dispatch = useDispatch();
  const [toDoList, setToDoList] = useState<toDoProps[]>([]);
  // let toDoList: toDoProps[] = [];
  // const toDoInfo = useSelector((state: RootState) => state.toDos);

  const handleDeleteTodo = (todo: toDoProps) => {
    dispatch(removeTodo(todo));
  };

  useEffect(() => {
    setToDoList(JSON.parse(localStorage.getItem("todos") || "[]"));
  }, [setToDoList]);

  useEffect(() => {
    console.log(typeof toDoList + toDoList.length + ' = toDoInfo')
  }, [])

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
              <li className={classes.todo} key={todo.id}>
                <Link to={`/todo-list/${todo.id}`}>
                  <div className={classes["todo-box"]}><p>TITLE: </p><p>{todo.title}</p></div>
                  {/* <div><p>DECRIPTION: </p><p>{todo.description}</p></div> */}
                </Link>
                <button className={classes.star}><AiOutlineStar /></button>
                {/* <button className={classes.star}><AiFillStar /></button> */}
                <button className={classes["close-btn"]} onClick={() => handleDeleteTodo(todo)}>삭제</button>
              </li>
            );
          })}
        </Fragment>
      )}
    </ul>
  );
};

export default TodoList;
