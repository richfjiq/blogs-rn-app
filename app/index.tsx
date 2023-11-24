import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  SafeAreaView,
  View,
} from 'react-native';

import { useBlogs } from '../src/hooks/useBlogs';
import { BlogCard } from '../src/components';

const Home = () => {
  const { blogs, loading, getUsers } = useBlogs();

  useEffect(() => {
    getUsers();
  }, []);

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
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, width: Dimensions.get('window').width }}>
      <FlatList
        data={blogs}
        renderItem={({ item }) => (
          <BlogCard
            _id={item._id}
            title={item.title}
            author={item.author}
            createdAt={item.createdAt}
            description={item.description}
            image_url={item.image_url}
          />
        )}
        keyExtractor={(item) => item._id}
        style={{ padding: 20 }}
        contentContainerStyle={{ paddingBottom: 40 }}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </SafeAreaView>
  );
};

export default Home;
