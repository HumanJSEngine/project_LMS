import { createSlice } from "@reduxjs/toolkit";

interface tokenReducerState {
  accessToken: string;
  refreshToken: string;
}

const INITIAL_STATE: tokenReducerState = {
  accessToken: "",
  refreshToken: "",
};

const tokenReducer = createSlice({
  name: "setting",
  initialState: INITIAL_STATE,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    removeAccessToken: state => {
      state.accessToken = "";
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    removeRefreshToken: state => {
      state.refreshToken = "";
    },
  },
});

export const {
  setAccessToken,
  removeAccessToken,
  setRefreshToken,
  removeRefreshToken,
} = tokenReducer.actions;
export default tokenReducer.reducer;
