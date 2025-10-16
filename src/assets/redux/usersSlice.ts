import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";

import { fetchUsers } from "./userOperations";
import { UsersState, User } from "../components/App/App.types";
import { RootState } from "./store";
import { selectFilters } from "./userFilterSlice";

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const userReducer = slice.reducer;

export const selectUsers = (state: RootState) => state.users.users;

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

      return filterName && filterUserName && filterEmail && filterPhone;
    });
  }
);
