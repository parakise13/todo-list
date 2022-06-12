import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editImportantTodo } from "../store/important-store";
import { RootState } from "../store/store";
import { editTodo, toDoProps } from "../store/todo-store";
import classes from "./NewTodo.module.scss";
import { paramsProps } from "./TodoDetail";

const EditTodo = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [foundTodo, setFoundTodo] = useState<toDoProps>({title: "", description: "", isImportant: false, id: 0 });

	const history = useHistory();
	const dispatch = useDispatch();
	const params = useParams<paramsProps>();
	const todos = useSelector((state: RootState) => state.toDos);

	const handleOnChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleOnChangeDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
	};
	
	const handleEdit = () => {
    dispatch(
			editTodo({
				id: parseInt(params.id),
        title,
        description,
      })
    );
    dispatch(
			editImportantTodo({
				id: parseInt(params.id),
        title,
        description,
      })
    );
    history.push(`/todo-project/todo-list/${parseInt(params.id)}`);
  };

	useEffect(() => {
		const todo = todos.find((toDo) => toDo.id === parseInt(params.id));
		if (todo) {
			setFoundTodo(todo);
		}
	}, [params.id, todos]);
	
  return (
		<div className={classes["edit-todo"]}>
			<h2>EDIT TODO</h2>
      <form>
        <div className={classes["title-input"]}>
          <label htmlFor="title">TITLE : </label>
          <input
            type="text"
            id="title"
            onChange={handleOnChangeTitle}
            defaultValue={foundTodo.title}
          />
        </div>
        <div className={classes["desc-input"]}>
          <label htmlFor="desc">DESCRIPTION : </label>
          <textarea
            // type="text"
            id="desc"
            onChange={handleOnChangeDesc}
            defaultValue={foundTodo.description}
            rows={6}
          />
        </div>
        <button type="submit" onClick={handleEdit}>
          수정완료
        </button>
      </form>
    </div>
  );
};

export default EditTodo;
