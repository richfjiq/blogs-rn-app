import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useBlogs } from '../../store/blogs';
import { styles } from './SearchButtons.style';

type Keys = 'title' | 'author' | 'description' | '';

interface Props {
  setSearchStatus: (isActive: boolean) => void;
  setKeySearch: React.Dispatch<React.SetStateAction<Keys>>;
}

const SearchButtons: FC<Props> = ({ setSearchStatus, setKeySearch }) => {
  const { internetService } = useBlogs();

  const onPressButton = (key: Keys) => {
    if (!internetService) return;
    setSearchStatus(true);
    setKeySearch(key);
  };

  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={18} color="#7692a0" />
      <TouchableOpacity
        onPress={() => onPressButton('author')}
        style={styles.buttonContainer}
        activeOpacity={0.9}
      >
        <Text style={styles.buttonText}>Por Autor</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPressButton('description')}
        style={styles.buttonContainer}
        activeOpacity={0.9}
      >
        <Text style={styles.buttonText}>Por Contenido</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPressButton('title')}
        style={styles.buttonContainer}
        activeOpacity={0.9}
      >
        <Text style={styles.buttonText}>Por Titulo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchButtons;
