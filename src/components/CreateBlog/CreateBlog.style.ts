import { Dimensions, Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 60 : 15,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 50,
    color: '#617c89',
  },
  form: {
    marginTop: 40,
  },
  rowInputContainer: {
    marginBottom: 30,
  },
  labelInput: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '600',
    color: '#617c89',
  },
  input: {
    borderWidth: 1,
    borderColor: '#617c89',
    flex: 1,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#617c89',
    flex: 1,
    height: 150,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  errorText: {
    position: 'absolute',
    bottom: -25,
    color: 'red',
  },
  buttonContainer: {
    padding: 20,
    width: '50%',
    borderRadius: 40,
    alignItems: 'center',
    backgroundColor: '#7692a0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    ation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
  },
});
