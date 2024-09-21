// src/components/NavBar.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavBar = ({ data }) => {
  const { style, title, links } = data;

  return (
    <View style={[styles.navBar, style]}>
      <Text style={{ 
        color: title.color, 
        fontSize: title.fontSize, 
        fontWeight: title.fontWeight, 
        textAlign: title.textAlign 
      }}>
        {title.content}
      </Text>

      <View style={styles.linksContainer}>
        {links.map((link, index) => (
          <TouchableOpacity key={index} style={styles.link}>
            <Text style={{ 
              color: link.color, 
              fontSize: link.fontSize 
            }}>
              {link.content}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#6200ea',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  linksContainer: {
    flexDirection: 'row',
  },
  link: {
    marginLeft: 20,
  },
});

export default NavBar;
