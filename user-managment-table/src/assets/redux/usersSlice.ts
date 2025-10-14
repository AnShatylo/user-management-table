import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "./userOperations";
import { initialUserState, User } from "../components/App/App.types";
import { RootState } from "./store";

const initialState: initialUserState = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
      }
    );
  },
});

export const userReducer = slice.reducer;

export const selectUsers = (state: RootState) => state.users.users;
const selectFilters = (state: RootState) => state.filters;

export const selectedUsers = createSelector(
  [selectUsers, selectFilters],
  (users, filters) => {
    return users.filter((user: User) => {
      const filterName = user.name
        .toLocaleLowerCase()
        .includes(filters.name.toLocaleLowerCase());
      const filterUserName = user.username
        .toLocaleLowerCase()
        .includes(filters.username.toLocaleLowerCase());
      const filterEmail = user.email
        .toLocaleLowerCase()
        .includes(filters.email.toLocaleLowerCase());
      const filterPhone = user.phone
        .toLocaleLowerCase()
        .includes(filters.phone.toLocaleLowerCase());

      return filterName || filterUserName || filterEmail || filterPhone;
    });
  }
);
