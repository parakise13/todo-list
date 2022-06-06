import { useDispatch } from "react-redux";
import { isImportant, removeTodo, toDoProps } from "../store/todo-store";
import { Link } from "react-router-dom";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { addImportant, removeImportant } from "../store/important-store";
import classes from "../Todo/TodoList.module.scss";

const List: React.FC<{ todos: toDoProps }> = (props) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = (todo: toDoProps) => {
    dispatch(removeTodo(todo.id));
  };

  const handleClickImportant = (todo: toDoProps) => {
    console.log('working')
    dispatch(isImportant(todo));
    if (todo.isImportant === false) {
      console.log('working2')
      dispatch(addImportant(todo));
    } else {
      console.log('working3')
      dispatch(removeImportant(todo));
    }
  };

  return (
    <li className={classes.todo}>
      <Link to={`/todo-list/${props.todos.id}`}>
        <div className={classes["todo-box"]}>
          <p>TITLE: </p>
          <p>{props.todos.title}</p>
        </div>
      </Link>
      <button
        className={`${classes.star}`}
        onClick={() => handleClickImportant(props.todos)}
      >
        {!props.todos.isImportant ? <AiOutlineStar /> : <AiFillStar />}
      </button>
      <button
        className={classes["close-btn"]}
        onClick={() => handleDeleteTodo(props.todos)}
      >
        삭제
      </button>
    </li>
  );
};

export default List;
