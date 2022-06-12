import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeImportant } from "../store/important-store";
import { RootState } from "../store/store";
import { isImportant, toDoProps } from "../store/todo-store";
import classes from "./TodoList.module.scss";

const ImportantTodos = () => {
	const dispatch = useDispatch();
	const importantTodos = useSelector((state: RootState) => state.importantTodo);
	const todolist = useSelector((state: RootState) => state.toDos);
	
	const handleDeleteImportant = (todo: toDoProps) => {
		dispatch(removeImportant(todo.id));

		const foundTodo = todolist.find(element => element.id === todo.id )
		dispatch(isImportant(foundTodo));
	}

  return (
    <ul className={classes["important-todos"]}>
      <h2>IMPORTANT TODO LIST</h2>
      {importantTodos.length === 0 ? (
        <li className={classes["empty-list"]}>
          중요한 List가 존재하지 않습니다. <br />  ToDo List에서 별모양 버튼을 클릭하여 <br />  Important ToDo를 추가해보세요!
        </li>
      ) : (
        <Fragment>
          {importantTodos.map((todo) => {
            return (
              <li key={todo.id} className={classes.todo}>
                <Link to={`/todo-project/todo-list/${todo.id}`}>
                  <div className={classes["todo-box"]}>
                    <p>TITLE: </p>
                    <p>{todo.title}</p>
                  </div>
                </Link>
                <button
                  className={classes["close-btn"]}
                  onClick={() => handleDeleteImportant(todo)}
                >
                  삭제
                </button>
              </li>
            );
          })}
        </Fragment>
      )}
    </ul>
  );
};

export default ImportantTodos;
