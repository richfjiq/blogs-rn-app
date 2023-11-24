import { FC } from 'react';
import { Link } from 'expo-router';
import { View, Text, Image, Dimensions } from 'react-native';
import moment from 'moment';

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
    <Link
      href={`blog/${_id}`}
      style={{
        shadowColor: '#e3dcdc',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      <View
        style={{
          backgroundColor: '#ffffff',
          flexDirection: 'column',
          borderRadius: 10,
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#878585',
        }}
      >
        <View
          style={{
            borderRadius: 10,
            width: Dimensions.get('window').width - 40,
            padding: 10,
          }}
        >
          <Image
            source={{ uri: image_url }}
            style={{
              width: Dimensions.get('window').width - 60,
              height: 170,
              borderRadius: 10,
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              marginBottom: 3,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              marginBottom: 2,
              fontStyle: 'italic',
            }}
          >
            {author}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              marginBottom: 5,
              fontStyle: 'italic',
            }}
          >
            {date}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
            }}
          >
            {description.slice(0, 70)}... Leer más
          </Text>
        </View>
      </View>
    </Link>
  );
};

export default BlogCard;
