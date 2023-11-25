import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useBlogs } from '../../store/blogs';

type Keys = 'title' | 'author' | 'description' | '';

interface Props {
  setSearchStatus: (isActive: boolean) => void;
  setKeySearch: React.Dispatch<React.SetStateAction<Keys>>;
}

const SearchButtons: FC<Props> = ({ setSearchStatus, setKeySearch }) => {
  const { internetService } = useBlogs();
  return (
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
          if (!internetService) return;
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
          if (!internetService) return;
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
          if (!internetService) return;
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
};

export default SearchButtons;
