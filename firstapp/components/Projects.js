import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function Project({ imageUri }) {
  return (
    <View style={styles.box}>
      <Image source={{ uri: imageUri }} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: '48%',
    height: 140,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 10,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
