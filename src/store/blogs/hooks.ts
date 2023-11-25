import { shallowEqual } from 'react-redux';
import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks';
import { RootState } from '../store';
import {
  getBlogs as getBlogsAction,
  getBlog as getBlogAction,
  setBlogSearch as setBlogSearchAction,
  setSearchStatus as setSearchStatusAction,
  createBlog as createBlogAction,
} from './actions';
import { Blog, BlogForm } from '../../interfaces';

export const useBlogs = () => {
  const blogsState = useAppSelector(
    (state: RootState) => ({ ...state }),
    shallowEqual
  );
  const dispatch = useAppDispatch();

  const getBlogs = useCallback(async () => {
    await dispatch(getBlogsAction());
  }, [dispatch]);

  const getBlog = useCallback(
    (blogId: string) => {
      dispatch(getBlogAction(blogId));
    },
    [dispatch]
  );

  const setBlogSearch = useCallback(
    (blogs: Blog[]) => {
      dispatch(setBlogSearchAction(blogs));
    },
    [dispatch]
  );

  const setSearchStatus = useCallback(
    (isActive: boolean) => {
      dispatch(setSearchStatusAction(isActive));
    },
    [dispatch]
  );

  const createBlog = useCallback(
    async (blog: BlogForm) => {
      await dispatch(createBlogAction(blog));
    },
    [dispatch]
  );

  return {
    ...blogsState,
    getBlogs,
    getBlog,
    setBlogSearch,
    setSearchStatus,
    createBlog,
  };
};
