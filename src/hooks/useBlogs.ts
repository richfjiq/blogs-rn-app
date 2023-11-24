import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isAxiosError } from 'axios';
import NetInfo from '@react-native-community/netinfo';

import { blogsApi } from '../api';
import { Blog } from '../interfaces';

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [blog, setBlog] = useState<Blog>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUser = useCallback(async (blogId: string) => {
    console.log({ blogId });
    try {
      setLoading(true);
      const resp = await blogsApi.get<Blog>(`/blogs/${blogId}`);
      console.log('resp ----------------', resp);
      setBlog(resp.data);
      setLoading(false);
    } catch (error) {
      if (isAxiosError(error)) {
        console.info(error.config);
        setError(true);
        setLoading(false);
      }
    }
  }, []);

  const getUsers = useCallback(async () => {
    try {
      setLoading(true);
      const resp = await blogsApi.get<Blog[]>('/blogs');
      setBlogs(resp.data);
      setLoading(false);
    } catch (error) {
      if (isAxiosError(error)) {
        console.info(error.config);
        setError(true);
        setLoading(false);
      }
    }
  }, []);

  const saveToLocalStorage = useCallback(async () => {
    if (blogs) {
      await AsyncStorage.setItem('blogs', JSON.stringify(blogs));
    }
  }, [blogs]);

  useEffect(() => {
    saveToLocalStorage();
  }, []);

  return {
    loading,
    blog,
    blogs,
    error,
    getUser,
    getUsers,
  };
};
