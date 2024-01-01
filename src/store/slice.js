// slice.js

import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, fetchSinglePost } from "../utils/apiCalls";

const initialState = {
  success: {
    login: false,
    isLoggedin: false,
  },
  data: {
    posts: [],
    singlePost: {},
  },
  loading: {
    posts: false,
    singlePost: false,
  },
};

export const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // fetch All Posts
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.data.posts = action.payload;
        state.loading.posts = false;
      })
      .addCase(fetchPosts.pending, (state, action) => {
        state.loading.posts = true;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading.posts = false;
      })

      // fetch Single Post
      .addCase(fetchSinglePost.fulfilled, (state, action) => {
        state.data.singlePost = action.payload;
        state.loading.singlePost = false;
      })
      .addCase(fetchSinglePost.pending, (state, action) => {
        state.loading.singlePost = true;
      })
      .addCase(fetchSinglePost.rejected, (state, action) => {
        state.loading.singlePost = false;
      });
  },
});

export default slice.reducer;
