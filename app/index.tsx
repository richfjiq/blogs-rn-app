import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { BlogCard, CreateBlog, SearchBar } from '../src/components';
import { useBlogs } from '../src/store/blogs/hooks';
import { useLocalDataStorage } from '../src/hooks';

const Home = () => {
  const {
    getBlogs,
    blogs,
    loading,
    activeSearch,
    blogSearch,
    internetService,
  } = useBlogs();
  const [modalIsVisible, setModalIsVisible] = useState(false);
  useLocalDataStorage();

  useEffect(() => {
    getBlogs();
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
        <ActivityIndicator size="large" color="#7692a0" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ width: Dimensions.get('window').width }}>
      {blogs && <SearchBar />}
      <View
        style={{
          justifyContent: 'center',
          paddingBottom: 20,
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          style={{
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 10,
            backgroundColor: '#7692a0',
          }}
          onPress={() => {
            if (!internetService) return;
            setModalIsVisible(true);
          }}
        >
          <Text style={{ color: '#ffffff', fontWeight: '500' }}>
            Agregar artículo
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={activeSearch ? blogSearch : blogs}
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
        style={{ padding: 20, paddingTop: 5 }}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
      <CreateBlog
        modalIsVisible={modalIsVisible}
        closeModal={() => setModalIsVisible(false)}
      />
    </SafeAreaView>
  );
};

export default Home;
