// src/components/Sidebar.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Sidebar = ({ data }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { style, collapseStyle, isCollapsible, menuItems } = data;

  const sidebarStyle = collapsed ? { ...style, ...collapseStyle } : style;

  return (
    <View style={[styles.sidebar, sidebarStyle]}>
      {isCollapsible && (
        <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
          <Text style={styles.collapseButton}>
            {collapsed ? '➡️' : '⬅️'}
          </Text>
        </TouchableOpacity>
      )}
      {menuItems.map((item, index) => (
        <View key={index} style={styles.menuItem}>
          <Text style={[styles.icon, { color: item.color }]}>{item.icon}</Text>
          {!collapsed && (
            <Text style={{ color: item.color, fontSize: item.fontSize }}>
              {item.content}
            </Text>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: '#333',
    width: 250,
    height: '100%',
    padding: 20,
    position: 'fixed',
    top: 0,
    left: 0,
  },
  collapseButton: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default Sidebar;
