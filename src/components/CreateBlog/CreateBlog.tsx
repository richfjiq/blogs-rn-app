import React, { FC } from 'react';
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

import { blogValidation } from '../../utils';
import { useBlogs } from '../../store/blogs';
import { BlogForm } from '../../interfaces';
import Loading from '../Loading/Loading';
import { styles } from './CreateBlog.style';

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
        style={styles.container}
      >
        <ScrollView>
          <View>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={closeForm}
              activeOpacity={0.9}
            >
              <AntDesign name="closecircle" size={30} color="#7692a0" />
            </TouchableOpacity>
          </View>
          <Text style={styles.headerTitle}>Agregar artículo</Text>

          <View style={styles.form}>
            <View style={styles.rowInputContainer}>
              <Text style={styles.labelInput}>Título</Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Título"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                  />
                )}
                name="title"
              />
              {errors.title && (
                <Text style={styles.errorText}>Campo requerido.</Text>
              )}
            </View>

            <View style={styles.rowInputContainer}>
              <Text style={styles.labelInput}>Autor</Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Autor"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                  />
                )}
                name="author"
              />
              {errors.author && (
                <Text style={styles.errorText}>Campo requerido.</Text>
              )}
            </View>

            <View style={styles.rowInputContainer}>
              <Text style={styles.labelInput}>Contenido</Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Contenido"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.textarea}
                    multiline
                    numberOfLines={10}
                  />
                )}
                name="description"
              />
              {errors.description && (
                <Text style={styles.errorText}>Campo requerido.</Text>
              )}
            </View>

            <View style={styles.rowInputContainer}>
              <Text style={styles.labelInput}>Imagen (url)</Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Imagen (url)"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                  />
                )}
                name="image_url"
              />
              {errors.image_url && (
                <Text style={styles.errorText}>Campo requerido.</Text>
              )}
            </View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
              <TouchableOpacity
                style={styles.buttonContainer}
                activeOpacity={0.9}
                onPress={handleSubmit(onSubmit)}
              >
                <Text style={styles.buttonText}>Crear artículo</Text>
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
