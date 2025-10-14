import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import type { User } from "../components/App/App.types";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export const fetchUsers = createAsyncThunk<
  User[],
  void,
  { rejectValue: string }
>("users/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get<User[]>("/users");
    return response.data;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknowт Error";
    return thunkAPI.rejectWithValue(message);
  }
});
