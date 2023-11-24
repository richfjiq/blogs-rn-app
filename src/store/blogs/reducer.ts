import { createSlice } from '@reduxjs/toolkit';

import { getBlog, getBlogs } from './actions';
import { Blog } from '../../interfaces';

interface InitialState {
  loading: boolean;
  error: boolean;
  blogs: Blog[];
  blog: Blog | null;
}

const initialState: InitialState = {
  loading: false,
  error: false,
  blogs: [],
  blog: null,
};

const blogsStore = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(getBlogs.pending, (state) => {
      state.loading = true;
    });

    builders.addCase(getBlogs.fulfilled, (state, { payload }) => {
      state.loading = false;
      payload as Blog[];
      state.blogs = payload as Blog[];
    });

    builders.addCase(getBlogs.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = true;
    });

    builders.addCase(getBlog, (state, { payload }) => {
      state.loading = true;
      const blog = state.blogs.filter((blog) => blog._id === payload)[0];
      console.log({ blog });
      state.blog = blog;
      state.loading = false;
    });
  },
});

export default blogsStore.reducer;
