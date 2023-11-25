import NetInfo from '@react-native-community/netinfo';
import { useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useBlogs } from '../store/blogs';
import { Blog } from '../interfaces';

export const useLocalDataStorage = () => {
  const { setBlogsFromLocalStorage, setInternetStatus, internetService } =
    useBlogs();

  const checkLocalStorage = useCallback(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('blogs');
      const blogs = JSON.parse(jsonValue ?? '') as Blog[];
      setBlogsFromLocalStorage(blogs);
    } catch (error) {
      console.info(error);
    }
  }, []);

  useEffect(() => {
    NetInfo.addEventListener((state) => {
      console.log(`Is connected? ${state.isConnected}`);
      setInternetStatus(state.isConnected ?? false);
    });
  }, []);

  useEffect(() => {
    if (!internetService) {
      checkLocalStorage();
    }
  }, [internetService]);
};
