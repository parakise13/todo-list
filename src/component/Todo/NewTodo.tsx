import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addTodo } from "../store/todo-store";
import classes from "./NewTodo.module.scss";

const NewTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleOnChangeDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(
      addTodo({
        title,
        description,
      })
    );
    history.push("/todo-list");
  };

  return (
    <div className={classes["new-todo"]}>
      <form>
        <div className={classes["title-input"]}>
          <label htmlFor="title">TITLE : </label>
          <input
            type="text"
            id="title"
            onChange={handleOnChangeTitle}
            value={title}
          />
        </div>
        <div className={classes["desc-input"]}>
          <label htmlFor="desc">DESCRIPTION : </label>
          <textarea
            // type="text"
            id="desc"
            onChange={handleOnChangeDesc}
						value={description}
						rows={6}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          추가하기
        </button>
      </form>
    </div>
  );
};

export default NewTodo;
