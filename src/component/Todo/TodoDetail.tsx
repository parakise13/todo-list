import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../store/store";

interface paramsProps {
	id: string
}

const TodoDetail = () => { 
	const params = useParams<paramsProps>();
	const todoId = useSelector((state: RootState) => state.toDos.find(todo => todo.id === parseInt(params.id)));

	// useEffect(() => {
	// 	console.log(todo);
	// }, [todoId])

	return <p>{ todoId?.id }</p>
}

export default TodoDetail;