import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { RootState } from "../store/store";
import { toDoProps } from "../store/todo-store";
import classes from "./TodoDetail.module.scss";

export interface paramsProps {
  id: string;
}

const TodoDetail = () => {
  const params = useParams<paramsProps>();
  const history = useHistory();
  const todo = useSelector((state: RootState) =>
    state.toDos.find((todo) => todo.id === parseInt(params.id))
  );

  useEffect(() => {
    if (todo === undefined) {
      history.push("/todo-project/todo-list");
    }
  }, [todo, history])

	const handleClickGoback = () => {
		history.push("/todo-project/todo-list");
  }
  
  const handleClickEdit = (todo: toDoProps | undefined) => {
    history.push(`/todo-project/edit-todo/${todo?.id}`)
  }

  return (
    <div className={classes["todo-detail"]}>
      <h2>TODO DETAIL</h2>
      <div  className={classes.btn}>
        <button className={classes.edit} onClick={()=>handleClickEdit(todo)}>수정하기</button>
        <button className={classes.goback} onClick={handleClickGoback}>뒤로가기</button>
      </div>
      <div className={classes.title}>TITLE : {todo?.title}</div>
      <div className={classes.description}>
        <p>DESCRIPTION</p>
        <p>{todo?.description}</p>
      </div>
    </div>
  );
};

export default TodoDetail;
