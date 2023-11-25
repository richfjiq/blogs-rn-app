import { View, Text, Modal, Dimensions, ActivityIndicator } from 'react-native';
import React, { FC } from 'react';

interface Props {
  isVisible: boolean;
}

const Loading: FC<Props> = ({ isVisible }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View
        style={{
          backgroundColor: '#000000',
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          opacity: 0.7,
        }}
      >
        <View
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ActivityIndicator size="large" color="#7692a0" />
        </View>
      </View>
    </Modal>
  );
};

export default Loading;
