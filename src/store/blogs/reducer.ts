import { createSlice } from '@reduxjs/toolkit';

import {
  createBlog,
  getBlog,
  getBlogs,
  setBlogSearch,
  setSearchStatus,
} from './actions';
import { Blog } from '../../interfaces';

interface InitialState {
  loading: boolean;
  createLoading: boolean;
  error: boolean;
  blogs: Blog[];
  blog: Blog | null;
  blogSearch: Blog[];
  activeSearch: boolean;
}

const initialState: InitialState = {
  loading: false,
  createLoading: false,
  error: false,
  blogs: [],
  blog: null,
  blogSearch: [],
  activeSearch: false,
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

    builders.addCase(createBlog.pending, (state) => {
      state.createLoading = true;
    });

    builders.addCase(createBlog.fulfilled, (state, { payload }) => {
      state.createLoading = false;
      payload as Blog[];
      state.blogs = payload as Blog[];
    });

    builders.addCase(createBlog.rejected, (state, { payload }) => {
      state.createLoading = false;
      state.error = true;
    });

    builders.addCase(getBlog, (state, { payload }) => {
      state.loading = true;
      const blog = state.blogs.filter((blog) => blog._id === payload)[0];
      state.blog = blog;
      state.loading = false;
    });

    builders.addCase(setBlogSearch, (state, { payload }) => {
      state.blogSearch = payload;
    });

    builders.addCase(setSearchStatus, (state, { payload }) => {
      state.activeSearch = payload;
    });
  },
});

export default blogsStore.reducer;
