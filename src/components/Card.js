// src/components/Card.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ data }) => {
  const { style, header, body, footer } = data || {}; // Provide fallback to avoid undefined errors

  return (
    <View style={style || styles.defaultCardStyle}>
      {header && (
        <Text style={[styles.header, { color: header.color, fontSize: header.fontSize }]}>
          {header.content}
        </Text>
      )}
      {body && (
        <Text style={[styles.body, { color: body.color, fontSize: body.fontSize }]}>
          {body.content}
        </Text>
      )}
      {footer && (
        <Text style={[styles.footer, { color: footer.color, fontSize: footer.fontSize }]}>
          {footer.content}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  defaultCardStyle: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  body: {
    marginBottom: 10,
  },
  footer: {
    textAlign: 'right',
  },
});

export default Card;
