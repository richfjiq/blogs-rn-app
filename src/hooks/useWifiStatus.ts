import NetInfo from '@react-native-community/netinfo';
import { useEffect } from 'react';

export const useWifiStatus = () => {
  useEffect(() => {
    NetInfo.addEventListener((state) => {
      console.log(`Is connected? ${state.isConnected}`);
    });
  }, []);
};
