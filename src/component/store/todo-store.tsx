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
    editTodo: (state: toDoProps[], action) => {
      let foundTodo = state.find((toDo) => toDo.id === action.payload.id);
      if (foundTodo) {
        foundTodo.title = action.payload.title;
        foundTodo.description = action.payload.description;
      }
    }
  },
});

export const { addTodo, removeTodo, isImportant, editTodo } = todoSlice.actions;

export default todoSlice;
