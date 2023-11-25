import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useBlogs } from '../../store/blogs';
import { styles } from './AddBlogButton.style';

interface Props {
  setModalIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddBlogButton: FC<Props> = ({ setModalIsVisible }) => {
  const { internetService } = useBlogs();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          if (!internetService) return;
          setModalIsVisible(true);
        }}
      >
        <Text style={styles.buttonText}>Agregar artículo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddBlogButton;
