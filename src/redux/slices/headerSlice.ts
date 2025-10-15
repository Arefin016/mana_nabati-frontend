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
    setHeader: (state, action: PayloadAction<HeaderState>) => {
      state.title = action.payload.title;
      state.isAddBtn = action.payload.isAddBtn;
      state.desc = action.payload.desc;
    },
    resetTitle: (state) => {
      state.title = "Dashboard";
      state.isAddBtn = false;
      state.desc = "Welcome back, Andrei";
    },
  },
});

export const { setHeader, resetTitle } = headerSlice.actions;
export default headerSlice.reducer;
