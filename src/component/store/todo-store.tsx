import { createSlice } from "@reduxjs/toolkit";

export interface toDoProps {
  title: string;
  description: string;
  id: number;
  isImportant?: boolean;
}

const initialTodoList: toDoProps[] = [];

const todoSlice = createSlice({
  name: "todoReducer",
  initialState: initialTodoList,
  reducers: {
    addTodo: (state: toDoProps[], action) => {
      state.push({
        title: action.payload.title,
        description: action.payload.description,
        id: Date.now(),
        isImportant: false,
      });
    },
    removeTodo: (state: toDoProps[], action) =>
      state.filter((toDo) => toDo.id !== action.payload),
    isImportant: (state: toDoProps[], action) => {
      let foundTodo = state.find((toDo) => toDo.id === action.payload.id);
      if (foundTodo) {
        foundTodo.isImportant = !action.payload.isImportant;
      }
    },
  },
});

export const { addTodo, removeTodo, isImportant } = todoSlice.actions;

export default todoSlice;
// return toDo.isImportant = action.payload.isImportant
