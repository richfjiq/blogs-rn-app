import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { blogsApi } from '../../api';
import { Blog } from '../../interfaces';

const GET_BLOGS = 'blogs/GET_BLOGS';
const GET_BLOG = 'blogs/GET_BLOG';

export const getBlogs = createAsyncThunk(
  GET_BLOGS,
  async (_, { rejectWithValue }) => {
    try {
      const response = await blogsApi.get<Blog[]>('/blogs');
      await AsyncStorage.setItem('blogs', JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      rejectWithValue('Server error.');
    }
  }
);

export const getBlog = createAction(GET_BLOG, (blogId: string) => {
  return {
    payload: blogId,
  };
});
