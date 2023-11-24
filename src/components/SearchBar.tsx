import React, { FC, useState } from 'react';
import {
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

const SearchBar: FC = () => {
  const [search, setSearch] = useState(false);
  const [keySearch, setKeySearch] = useState('');

  const buttonsSearch = () => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
      }}
    >
      <FontAwesome name="search" size={18} color="black" />
      <TouchableOpacity
        onPress={() => {
          setSearch(true);
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
          setSearch(true);
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
          setSearch(true);
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
        color="black"
        style={{ position: 'absolute', left: 10 }}
      />
      <TextInput
        style={{
          borderWidth: 1,
          flex: 1,
          height: 40,
          borderRadius: 10,
          paddingLeft: 35,
        }}
      />
      <TouchableOpacity
        style={{ position: 'absolute', right: 10 }}
        onPress={() => {
          setSearch(false);
          setKeySearch('');
        }}
        activeOpacity={0.9}
      >
        <AntDesign name="closecircle" size={22} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View
      style={{
        width: Dimensions.get('window').width,
        padding: 20,
        paddingBottom: 0,
      }}
    >
      {search ? searchField() : buttonsSearch()}
    </View>
  );
};

export default SearchBar;
