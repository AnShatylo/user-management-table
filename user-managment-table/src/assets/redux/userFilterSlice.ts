import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filterUserState } from "../components/App/App.types";


const initialState: filterUserState = {
    name: '',
    username: '',
    email: '',
    phone: '',
}

const slice = createSlice ({
    name: 'userFilter',
    initialState,
    reducers: {
        changeFilter: (state, action: PayloadAction<Partial<filterUserState>>) => {
            return {...state, ...action.payload};
        }
    }
});

export const {changeFilter} = slice.actions;
export default slice.reducer;

