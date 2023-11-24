import React, { useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  SafeAreaView,
  View,
} from 'react-native';

import { BlogCard, SearchBar } from '../src/components';
import { useBlogs } from '../src/store/blogs/hooks';
import { useWifiStatus } from '../src/hooks';

const Home = () => {
  const { getBlogs, blogs, loading } = useBlogs();
  useWifiStatus();

  useEffect(() => {
    getBlogs();
  }, []);

  const checkLocalStorage = useCallback(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('blogs');
      const blogs = JSON.parse(jsonValue ?? '');
      console.log({ blogs });
    } catch (error) {
      console.info(error);
    }
    await AsyncStorage.setItem('blogs', JSON.stringify(blogs));
  }, []);

  useEffect(() => {
    checkLocalStorage();
  }, []);

  useEffect(() => {}, []);

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

  return (
    <SafeAreaView style={{ flex: 1, width: Dimensions.get('window').width }}>
      {blogs && <SearchBar />}
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
