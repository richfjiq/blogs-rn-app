import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerLoading: {
    height: Dimensions.get('window').height - 150,
    width: Dimensions.get('window').width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCard: {
    flexDirection: 'column',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 40,
  },
  imageContainer: {
    borderRadius: 10,
    width: Dimensions.get('window').width,
    padding: 20,
    paddingBottom: 0,
  },
  image: {
    width: Dimensions.get('window').width - 40,
    height: 200,
    borderRadius: 10,
  },
  bodyContainer: {
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
  },
  author: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 3,
    fontStyle: 'italic',
  },
  date: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'justify',
  },
});
