import { View, Modal, Dimensions, ActivityIndicator } from 'react-native';
import React, { FC } from 'react';
import { styles } from './Loading.style';

interface Props {
  isVisible: boolean;
}

const Loading: FC<Props> = ({ isVisible }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <ActivityIndicator size="large" color="#7692a0" />
        </View>
      </View>
    </Modal>
  );
};

export default Loading;
