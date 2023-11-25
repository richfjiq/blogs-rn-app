import { View, Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { useBlogs } from '../../store/blogs';

interface Props {
  setModalIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddBlogButton: FC<Props> = ({ setModalIsVisible }) => {
  const { internetService } = useBlogs();
  return (
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
  );
};

export default AddBlogButton;
