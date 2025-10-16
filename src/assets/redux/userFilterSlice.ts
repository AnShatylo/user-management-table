import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filterUserState } from "../components/App/App.types";
import { RootState } from "./store";

const initialState: filterUserState = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<Partial<filterUserState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const selectFilters = (state: RootState) => state.filters;

export const selectFilterName = (state: RootState) => state.filters.name;
export const selectFilterUsername = (state: RootState) =>
  state.filters.username;
export const selectFilterEmail = (state: RootState) => state.filters.email;
export const selectFilterPhone = (state: RootState) => state.filters.phone;

export const { changeFilter } = slice.actions;
export default slice.reducer;
