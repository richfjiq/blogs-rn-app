import { FC } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import moment from 'moment';
import { Blog } from '../../interfaces';
import { useBlogs } from '../../store/blogs';
import { styles } from './BlogDetailsCard.style';

const BlogDetailsCard: FC = () => {
  const { blog } = useBlogs();

  if (!blog) {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator size="large" color="#7692a0" />
      </View>
    );
  }

  const { title, image_url, author, description, createdAt } = blog as Blog;

  const date = moment(new Date(createdAt)).format('MM-DD-YYYY');

  return (
    <ScrollView>
      <View style={styles.containerCard}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image_url }} style={styles.image} />
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default BlogDetailsCard;
