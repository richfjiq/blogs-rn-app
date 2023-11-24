import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { blogsApi } from '../../api';
import { Blog } from '../../interfaces';
import { store } from '../store';

const GET_BLOGS = 'blogs/GET_BLOGS';
const GET_BLOG = 'blogs/GET_BLOG';

export const getBlogs = createAsyncThunk(
  GET_BLOGS,
  async (_, { rejectWithValue }) => {
    const response = await blogsApi.get<Blog[]>('/blogs');
    if (response.data) return response.data;
    rejectWithValue('Server error.');
  }
);

export const getBlog = createAction(GET_BLOG, (blogId: string) => {
  return {
    payload: blogId,
  };
});
