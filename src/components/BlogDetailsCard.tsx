import { Link, useLocalSearchParams } from 'expo-router';
import { FC, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import moment from 'moment';
import { Blog } from '../interfaces';
import { useBlogs } from '../store/blogs';

const BlogDetailsCard: FC = () => {
  const { blog } = useBlogs();
  const { title, image_url, author, description, createdAt } = blog as Blog;

  const date = moment(new Date(createdAt)).format('MM-DD-YYYY');

  if (!blog) {
    return (
      <View
        style={{
          height: Dimensions.get('window').height - 150,
          width: Dimensions.get('window').width,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" color="#7692a0" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'column',
          borderRadius: 10,
          alignItems: 'center',
          marginBottom: 40,
        }}
      >
        <View
          style={{
            borderRadius: 10,
            width: Dimensions.get('window').width,
            padding: 20,
            paddingBottom: 0,
          }}
        >
          <Image
            source={{ uri: image_url }}
            style={{
              width: Dimensions.get('window').width - 40,
              height: 200,
              borderRadius: 10,
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              marginBottom: 5,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              marginBottom: 3,
              fontStyle: 'italic',
            }}
          >
            {author}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              marginBottom: 10,
              fontStyle: 'italic',
            }}
          >
            {date}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              textAlign: 'justify',
            }}
          >
            {description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default BlogDetailsCard;
