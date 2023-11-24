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

const BlogDetailsCard: FC<Props> = ({
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
    <Link href={`blogs/${_id}`}>
      <View>
        <View>
          <Image source={{ uri: image_url }} />
        </View>
        <View>
          <Text>{title}</Text>
          <Text>{author}</Text>
          <Text>{createdAt}</Text>
          <Text>{description}</Text>
        </View>
      </View>
    </Link>
  );
};

export default BlogDetailsCard;
