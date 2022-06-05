import { createSlice } from "@reduxjs/toolkit";

export interface toDoProps {
	title: string;
	description: string;
	id: number;
}

const initialTodoList: toDoProps[] = [];

const todoSlice = createSlice({
  name: "todoReducer",
  initialState: initialTodoList,
  reducers: {
    addTodo: (state: toDoProps[], action) => {
			state.push(...state, {
				title: action.payload.title,
				description: action.payload.description,
        id: Date.now(),
			});

			localStorage.setItem("todos", JSON.stringify([...state]));
    },
    removeTodo: (state: toDoProps[], action) => {
      state.filter((toDo) => toDo.id !== action.payload);
		},
		// getTodo: (state: toDoProps[], action) => {
		// 	const items = JSON.parse(localStorage.getItem("todos")  || '{}')
		// 		state.push(items);
		// }
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice;
