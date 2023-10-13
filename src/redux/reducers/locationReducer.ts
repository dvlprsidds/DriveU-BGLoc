import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  currentCoord: null,
  history: null,
};

export const authSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    updateCurrentCoord: (state, action) => {
      state.currentCoord = action.payload;
    },
    updateHistory: (state, action) => {
      state.history = action.payload;
    },
  },
});

export const {updateCurrentCoord, updateHistory} = authSlice.actions;

export default authSlice.reducer;
