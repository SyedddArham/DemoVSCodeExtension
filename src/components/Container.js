import React from 'react';
import { View, StyleSheet } from 'react-native';

const Container = ({ children, style, ...rest }) => {
  return (
    <View style={[styles.default, style]} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    padding: 10,
    margin: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
});

export default Container;
