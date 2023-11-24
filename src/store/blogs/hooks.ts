import { shallowEqual } from 'react-redux';
import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks';
import { RootState } from '../store';
import {
  getBlogs as getBlogsAction,
  getBlog as getBlogAction,
} from './actions';

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

  return {
    ...blogsState,
    getBlogs,
    getBlog,
  };
};
