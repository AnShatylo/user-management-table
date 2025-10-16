import { configureStore } from "@reduxjs/toolkit";
import filterUserReducer from "./userFilterSlice";
import { userReducer } from "./usersSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    filters: filterUserReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
