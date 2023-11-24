import { Link } from 'expo-router';
import { FC } from 'react';
import { View, Text, Image } from 'react-native';

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
