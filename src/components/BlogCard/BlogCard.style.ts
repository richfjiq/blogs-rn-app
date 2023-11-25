import { Dimensions, Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  link: {
    shadowColor: '#e3dcdc',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#7692a0',
    width: Dimensions.get('window').width - 40,
  },
  imageContainer: {
    borderRadius: 10,
    width:
      Platform.OS === 'ios'
        ? Dimensions.get('window').width - 40
        : Dimensions.get('window').width,
    padding: 10,
  },
  image: {
    width:
      Platform.OS === 'ios'
        ? Dimensions.get('window').width - 60
        : Dimensions.get('window').width,
    height: 170,
    borderRadius: 10,
  },
  bodyContainer: {
    width: '100%',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 3,
  },
  author: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 2,
    fontStyle: 'italic',
  },
  date: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 5,
    fontStyle: 'italic',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
  },
});
