import { useCallback, useEffect, useState } from 'react';
import { blogsApi } from '../api';
import { User, UserResponse, UsersResponse } from '../interfaces';
import { isAxiosError } from 'axios';

export const useBlogs = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const url = 'https://reqres.in/api';

  const getUsers = useCallback(async () => {
    if (page > 2) return;

    try {
      setLoading(true);
      const resp = await blogsApi.get<UsersResponse>(`${url}/users?page=${1}`);
      setUsers(resp.data.data);
      setLoading(false);
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.response.data);
        setError(true);
        setLoading(false);
      }
    }
  }, [page]);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {}, []);

  return {
    loading,
    users,
    error,
  };
};
