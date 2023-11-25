import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#7692a0',
    flex: 1,
    height: 40,
    borderRadius: 10,
    paddingLeft: 35,
  },
  containerIcon: {
    position: 'absolute',
    right: 10,
  },
});
