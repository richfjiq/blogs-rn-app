import { FC, useEffect } from 'react';
import { View, Text, Dimensions, ActivityIndicator } from 'react-native';
import { BlogDetailsCard } from '../../src/components';
import { useLocalSearchParams } from 'expo-router';
import { useBlogs } from '../../src/store/blogs';

const Blog: FC = () => {
  const { blogId } = useLocalSearchParams();
  const { getBlog, loading } = useBlogs();

  useEffect(() => {
    getBlog(blogId as string);
  }, [blogId]);

  if (loading) {
    return (
      <View
        style={{
          height: Dimensions.get('window').height - 150,
          width: Dimensions.get('window').width,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" color="#7692a0" />
      </View>
    );
  }

  return <BlogDetailsCard />;
};

export default Blog;
