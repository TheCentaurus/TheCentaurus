import profileService from "@/api/profile.service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  isLoading: false,
  errorMessage: null,
};

export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (data) => {
    const response = await profileService.updateProfile(data);
    return response.data;
  }
);

export const getProfile = createAsyncThunk("profile/getProfile", async (id) => {
  const response = await profileService.getProfile(id);
  return response.data;
});

const profileSlice = createSlice({
  name: "profile",
  initialState,
  extraReducers: {
    [updateProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [updateProfile.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [updateProfile.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    },
    [getProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [getProfile.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [getProfile.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    },
  },
});

export default profileSlice.reducer;
