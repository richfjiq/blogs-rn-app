import { FC } from 'react';
import { Link } from 'expo-router';
import { View, Text, Image } from 'react-native';
import moment from 'moment';

import { styles } from './BlogCard.style';

interface Props {
  _id: string;
  title: string;
  author: string;
  createdAt: string;
  description: string;
  image_url: string;
}

const BlogCard: FC<Props> = ({
  _id,
  title,
  author,
  createdAt,
  description,
  image_url,
}) => {
  const date = moment(new Date(createdAt)).format('MM-DD-YYYY');

  return (
    <Link href={`blog/${_id}`} style={styles.link}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image_url }} style={styles.image} />
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.description}>
            {description.slice(0, 70)}... Leer más
          </Text>
        </View>
      </View>
    </Link>
  );
};

export default BlogCard;
