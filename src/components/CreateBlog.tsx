import React, { FC, useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Modal,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { blogValidation } from '../utils';
import { useBlogs } from '../store/blogs';
import { Blog, BlogForm } from '../interfaces';
import axios from 'axios';
import { blogsApi } from '../api';
import Loading from './Loading';

interface Props {
  modalIsVisible: boolean;
  closeModal: () => void;
}

const CreateBlog: FC<Props> = ({ modalIsVisible, closeModal }) => {
  const { createBlog, createLoading } = useBlogs();

  const {
    control,
    handleSubmit,
    formState: { errors },
    resetField,
    clearErrors,
  } = useForm<BlogForm>({
    defaultValues: {
      title: '',
      author: '',
      description: '',
      image_url: '',
    },
    resolver: yupResolver(blogValidation),
  });

  const onSubmit = async (data: BlogForm) => {
    createBlog({
      title: data.title,
      author: data.author,
      description: data.description,
      image_url: data.image_url,
    });

    resetField('title');
    resetField('author');
    resetField('description');
    resetField('image_url');

    setTimeout(() => {
      closeModal();
    }, 1500);
  };

  const closeForm = () => {
    closeModal();
    clearErrors(['title', 'author', 'description', 'image_url']);
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalIsVisible}
      onRequestClose={closeModal}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          backgroundColor: '#fff',
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          padding: 20,
          paddingTop: 60,
        }}
      >
        <ScrollView>
          <View>
            <TouchableOpacity
              style={{ position: 'absolute', right: 10 }}
              onPress={closeForm}
              activeOpacity={0.9}
            >
              <AntDesign name="closecircle" size={30} color="#7692a0" />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '700',
              textAlign: 'center',
              marginTop: 50,
              color: '#617c89',
            }}
          >
            Agregar artíclo
          </Text>

          <View style={{ marginTop: 40 }}>
            <View style={{ marginBottom: 30 }}>
              <Text
                style={{
                  marginBottom: 10,
                  fontSize: 18,
                  fontWeight: '600',
                  color: '#617c89',
                }}
              >
                Título
              </Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Título"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={{
                      borderWidth: 1,
                      borderColor: '#617c89',
                      flex: 1,
                      height: 40,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                    }}
                  />
                )}
                name="title"
              />
              {errors.title && (
                <Text
                  style={{ position: 'absolute', bottom: -25, color: 'red' }}
                >
                  Campo requerido.
                </Text>
              )}
            </View>

            <View style={{ marginBottom: 30 }}>
              <Text
                style={{
                  marginBottom: 10,
                  fontSize: 18,
                  fontWeight: '600',
                  color: '#617c89',
                }}
              >
                Autor
              </Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Autor"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={{
                      borderWidth: 1,
                      borderColor: '#617c89',
                      flex: 1,
                      height: 40,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                    }}
                  />
                )}
                name="author"
              />
              {errors.author && (
                <Text
                  style={{ position: 'absolute', bottom: -25, color: 'red' }}
                >
                  Campo requerido.
                </Text>
              )}
            </View>

            <View style={{ marginBottom: 30 }}>
              <Text
                style={{
                  marginBottom: 10,
                  fontSize: 18,
                  fontWeight: '600',
                  color: '#617c89',
                }}
              >
                Contenido
              </Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Contenido"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={{
                      borderWidth: 1,
                      borderColor: '#617c89',
                      flex: 1,
                      height: 40,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                    }}
                  />
                )}
                name="description"
              />
              {errors.description && (
                <Text
                  style={{ position: 'absolute', bottom: -25, color: 'red' }}
                >
                  Campo requerido.
                </Text>
              )}
            </View>

            <View style={{ marginBottom: 30 }}>
              <Text
                style={{
                  marginBottom: 10,
                  fontSize: 18,
                  fontWeight: '600',
                  color: '#617c89',
                }}
              >
                Imagen (url)
              </Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Imagen (url)"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={{
                      borderWidth: 1,
                      borderColor: '#617c89',
                      flex: 1,
                      height: 40,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                    }}
                  />
                )}
                name="image_url"
              />
              {errors.image_url && (
                <Text
                  style={{ position: 'absolute', bottom: -25, color: 'red' }}
                >
                  Campo requerido.
                </Text>
              )}
            </View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
              <TouchableOpacity
                style={{
                  padding: 20,
                  width: '50%',
                  borderRadius: 40,
                  alignItems: 'center',
                  backgroundColor: '#7692a0',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,

                  elevation: 3,
                }}
                activeOpacity={0.9}
                onPress={handleSubmit(onSubmit)}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '700',
                    color: '#ffffff',
                  }}
                >
                  Crear artículo
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Loading isVisible={createLoading} />
    </Modal>
  );
};

export default CreateBlog;
