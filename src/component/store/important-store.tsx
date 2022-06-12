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
		editImportantTodo: (state: toDoProps[], action) => {
      let foundTodo = state.find((toDo) => toDo.id === action.payload.id);
      if (foundTodo) {
        foundTodo.title = action.payload.title;
        foundTodo.description = action.payload.description;
      }
    }
	}
}
);

export const { addImportant, removeImportant, editImportantTodo } = importantTodoSlice.actions;

export default importantTodoSlice;