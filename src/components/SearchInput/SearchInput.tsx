import React, { FC } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import { useBlogs } from '../../store/blogs';
import { styles } from './SearchInput.style';

type Keys = 'title' | 'author' | 'description' | '';

interface Props {
  setSearchStatus: (isActive: boolean) => void;
  setKeySearch: React.Dispatch<React.SetStateAction<Keys>>;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: FC<Props> = ({ setSearchStatus, setKeySearch, setTerm }) => {
  const { blogs, setBlogSearch } = useBlogs();
  return (
    <View style={styles.container}>
      <FontAwesome
        name="search"
        size={18}
        color="#7692a0"
        style={styles.searchIcon}
      />
      <TextInput style={styles.input} onChangeText={setTerm} />
      <TouchableOpacity
        style={styles.containerIcon}
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
