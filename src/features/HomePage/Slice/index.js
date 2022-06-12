import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openProfile: true,
};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    toggleProfile: (state) => {
      state.openProfile = !state.openProfile;
    },
    openProfile: (state) => {
      state.openProfile = true;
    },
  },
});

export const { toggleProfile, openProfile } = profile.actions;

export default profile.reducer;
