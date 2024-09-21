// src/components/Footer.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Footer = ({ data }) => {
  const { style, links, copyright } = data;

  return (
    <View style={style.container}>
      <View style={style.links}>
        {links.map((link, index) => (
          <TouchableOpacity key={index} onPress={() => console.log(`Navigating to: ${link.url}`)}>
            <Text style={{ color: link.color, marginHorizontal: 10 }}>
              {link.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={{ color: style.copyrightColor }}>
        {copyright.text}
      </Text>
    </View>
  );
};

export default Footer;
