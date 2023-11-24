import React from 'react';
import { Stack } from 'expo-router';

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
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
  );
};

export default StackLayout;
