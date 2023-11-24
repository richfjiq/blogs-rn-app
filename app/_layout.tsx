import React from 'react';
import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';

const StackLayout = () => {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#7692a0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="index" options={{ headerTitle: 'The Blog' }} />
        <Stack.Screen name="blog/[blogId]" options={{ headerTitle: 'Blog' }} />
      </Stack>
    </Provider>
  );
};

export default StackLayout;
