import React, { FC } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useBlogs } from '../../store/blogs';

type Keys = 'title' | 'author' | 'description' | '';

interface Props {
  setSearchStatus: (isActive: boolean) => void;
  setKeySearch: React.Dispatch<React.SetStateAction<Keys>>;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: FC<Props> = ({ setSearchStatus, setKeySearch, setTerm }) => {
  const { blogs, setBlogSearch } = useBlogs();
  return (
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
};

export default SearchInput;
