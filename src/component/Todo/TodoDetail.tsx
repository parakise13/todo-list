import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { RootState } from "../store/store";
import classes from "./TodoDetail.module.scss";

interface paramsProps {
  id: string;
}

const TodoDetail = () => {
  const params = useParams<paramsProps>();
  const history = useHistory();
  const todo = useSelector((state: RootState) =>
    state.toDos.find((todo) => todo.id === parseInt(params.id))
  );

	const handleClickGoback = () => {
		history.goBack();
	}

  return (
    <div className={classes["todo-detail"]}>
      <button className={classes.goback} onClick={handleClickGoback}>뒤로가기</button>
      <div className={classes.title}>TITLE : {todo?.title}</div>
      <div className={classes.description}>
        <p>DESCRIPTION</p>
        <p>{todo?.description}</p>
      </div>
    </div>
  );
};

export default TodoDetail;
