import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type HeaderState = {
  title: string;
  desc: string;
  isAddBtn: boolean;
};

const initialState: HeaderState = {
  title: "Dashboard",
  isAddBtn: false,
  desc: "Welcome back, Andrei",
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<HeaderState>) => {
      state.title = action.payload.title;
      state.isAddBtn = action.payload.isAddBtn;
      state.desc = action.payload.desc;
    },
  },
});

export const { setTitle } = headerSlice.actions;
export default headerSlice.reducer;
