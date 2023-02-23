import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  name: string;
  age: number;
}

const initialState: CounterState = {
  name: "initial",
  age: 0,
};

export const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    updateAll: (state, action: PayloadAction<CounterState>) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateAge,updateAll,updateName } = sampleSlice.actions;

export default sampleSlice.reducer;
