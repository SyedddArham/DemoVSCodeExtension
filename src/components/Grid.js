// src/components/Grid.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Grid = ({ data }) => {
  const { rows, columns, spacing, style, items } = data;

  const renderGridItems = () => {
    return items.map((item, index) => (
      <View
        key={index}
        style={[
          styles.gridItem,
          { margin: spacing / 2, backgroundColor: style.backgroundColor },
        ]}
      >
        <Text
          style={{
            color: item.color,
            fontSize: item.fontSize,
            textAlign: 'center',
          }}
        >
          {item.content}
        </Text>
      </View>
    ));
  };

  return (
    <View style={[styles.gridContainer, { flexWrap: 'wrap', margin: -spacing / 2 }]}>
      {renderGridItems()}
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gridItem: {
    flexBasis: '30%', // Approximate width for 3 columns
    padding: 10,
    borderRadius: 5,
  },
});

export default Grid;
