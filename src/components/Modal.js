// src/components/Modal.js
import React from 'react';
import { View, Text, TouchableOpacity, Modal as RNModal, StyleSheet } from 'react-native';

const Modal = ({ data, isVisible, onClose }) => {
  const { style, title, content, actions } = data;

  return (
    <RNModal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={style.overlay}>
        <View style={style.modal}>
          <View style={style.header}>
            <Text style={style.title}>{title}</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={style.closeButton}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={style.body}>
            <Text>{content}</Text>
          </View>
          <View style={style.footer}>
            {actions.map((action, index) => (
              <TouchableOpacity
                key={index}
                onPress={action.onPress}
                style={style.button}
              >
                <Text>{action.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;
