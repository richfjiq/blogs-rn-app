import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import {
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import { useBlogs } from '../store/blogs';
import { useDebounce } from '../hooks';

type Keys = 'title' | 'author' | 'description' | '';

const SearchBar: FC = () => {
  const { blogs, setBlogSearch, setSearchStatus, activeSearch } = useBlogs();
  const [keySearch, setKeySearch] = useState<Keys>('');
  const [term, setTerm] = useState('');
  const debouncedSearch = useDebounce(term, 300);

  const searchByTerm = useCallback(() => {
    const search = blogs.filter((blog) => {
      if (keySearch === '') return blog;

      return blog[keySearch]
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());
    });
    setBlogSearch(search);
  }, [debouncedSearch]);

  useEffect(() => {
    searchByTerm();
  }, [debouncedSearch]);

  const buttonsSearch = () => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
      }}
    >
      <FontAwesome name="search" size={18} color="#7692a0" />
      <TouchableOpacity
        onPress={() => {
          setSearchStatus(true);
          setKeySearch('author');
        }}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 10,
          backgroundColor: '#7692a0',
        }}
        activeOpacity={0.9}
      >
        <Text style={{ color: '#ffffff', fontWeight: '500' }}>Por Autor</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSearchStatus(true);
          setKeySearch('description');
        }}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 10,
          backgroundColor: '#7692a0',
        }}
        activeOpacity={0.9}
      >
        <Text style={{ color: '#ffffff', fontWeight: '500' }}>
          Por Contenido
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSearchStatus(true);
          setKeySearch('title');
        }}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 10,
          backgroundColor: '#7692a0',
        }}
        activeOpacity={0.9}
      >
        <Text style={{ color: '#ffffff', fontWeight: '500' }}>Por Titulo</Text>
      </TouchableOpacity>
    </View>
  );

  const searchField = () => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
      }}
    >
      <FontAwesome
        name="search"
        size={18}
        color="#7692a0"
        style={{ position: 'absolute', left: 10 }}
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#7692a0',
          flex: 1,
          height: 40,
          borderRadius: 10,
          paddingLeft: 35,
        }}
        onChangeText={setTerm}
      />
      <TouchableOpacity
        style={{ position: 'absolute', right: 10 }}
        onPress={() => {
          setSearchStatus(false);
          setKeySearch('');
          setBlogSearch(blogs);
        }}
        activeOpacity={0.9}
      >
        <AntDesign name="closecircle" size={22} color="#7692a0" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View
      style={{
        width: Dimensions.get('window').width,
        padding: 20,
        paddingBottom: 10,
      }}
    >
      {activeSearch ? searchField() : buttonsSearch()}
    </View>
  );
};

export default SearchBar;
