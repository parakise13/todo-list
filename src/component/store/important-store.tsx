import { createSlice } from "@reduxjs/toolkit";
import { toDoProps } from "./todo-store";


const initialImportantTodoList: toDoProps[] = [];

const importantTodoSlice = createSlice({
	name: "importantReducer",
	initialState: initialImportantTodoList,
	reducers: {
		addImportant: (state: toDoProps[], action) => {
			state.push(action.payload);
			// console.log(state + ' = state')
		},
		removeImportant: (state: toDoProps[], action) => state.filter((toDo) => toDo.id !== action.payload),
	}
}
);

export const { addImportant, removeImportant } = importantTodoSlice.actions;

export default importantTodoSlice;