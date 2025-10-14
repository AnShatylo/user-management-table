import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialUserState } from "../components/App/App.types";


const initialState: initialUserState = {
    name: '',
    username: '',
    email: '',
    phone: '',
}

const slice = createSlice ({
    name: 'userFilter',
    initialState,
    reducers: {
        changeFilter: (state, action: PayloadAction<Partial<initialUserState>>) => {
            return {...state, ...action.payload};
        }
    }
});

export const {changeFilter} = slice.actions;
export default slice.reducer;

