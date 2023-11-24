import { Link } from 'expo-router';
import { FC, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useBlogs } from '../hooks/useBlogs';

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
  const { getUser } = useBlogs();

  useEffect(() => {
    getUser(_id);
  }, [_id]);

  return (
    <Link href={`blog/:${_id}`}>
      <View
        style={{
          borderColor: 'red',
          borderWidth: 2,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <View>
          <Image
            source={{ uri: image_url }}
            style={{ width: 120, height: 120 }}
          />
        </View>
        <View>
          <Text>{title}</Text>
          <Text>{author}</Text>
          <Text>{createdAt}</Text>
          <Text>{description.slice(0, 20)}...</Text>
        </View>
      </View>
    </Link>
  );
};

export default BlogCard;
