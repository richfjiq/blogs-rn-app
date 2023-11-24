import { FC } from 'react';
import { View, Text } from 'react-native';
import { BlogDetailsCard } from '../../src/components';
import { useLocalSearchParams } from 'expo-router';

const Blog: FC = () => {
  const { blogId } = useLocalSearchParams();

  return <BlogDetailsCard id={blogId as string} />;
};

export default Blog;
