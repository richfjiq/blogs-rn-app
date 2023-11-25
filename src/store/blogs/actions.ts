import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { blogsApi } from '../../api';
import { Blog, BlogForm } from '../../interfaces';
import { RootState } from '../store';
import axios from 'axios';

const GET_BLOGS = 'blogs/GET_BLOGS';
const GET_BLOG = 'blogs/GET_BLOG';
const SET_BLOG_SEARCH = 'blogs/SET_BLOG_SEARCH';
const SET_SEARCH_STATUS = 'blogs/SET_SEARCH_STATUS';
const CREATE_BLOG = 'blogs/CREATE_BLOG';

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

export const createBlog = createAsyncThunk(
  CREATE_BLOG,
  async (blog: BlogForm, { rejectWithValue }) => {
    try {
      await blogsApi.post('/blogs', blog);
      const response = await blogsApi.get<Blog[]>('/blogs');
      await AsyncStorage.setItem('blogs', JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      rejectWithValue('Server error.');
      console.log(error);
    }
  }
);

export const getBlog = createAction(GET_BLOG, (blogId: string) => {
  return {
    payload: blogId,
  };
});

export const setBlogSearch = createAction(SET_BLOG_SEARCH, (blogs: Blog[]) => {
  return {
    payload: blogs,
  };
});

export const setSearchStatus = createAction(
  SET_SEARCH_STATUS,
  (isActive: boolean) => {
    return {
      payload: isActive,
    };
  }
);
