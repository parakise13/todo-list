import { configureStore } from "@reduxjs/toolkit";
import addUserSlice from "./addUser-store";
import importantTodoSlice from "./important-store";
import loginSlice from "./login-store";
import todoSlice from "./todo-store";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    addUsername: addUserSlice.reducer,
    toDos: todoSlice.reducer,
    importantTodo: importantTodoSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
