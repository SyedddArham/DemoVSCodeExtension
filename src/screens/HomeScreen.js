// src/screens/HomeScreen.js
import React, { useState } from 'react';
import { Text, ScrollView, Button } from 'react-native';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Card from '../components/Card';
import NavBar from '../components/NavBar';
import Sidebar from '../components/SideBar';
import Footer from '../components/Footer';
import Modal from '../components/Modal'; // Import Modal
import { containerData, gridData, cardData, navBarData, sidebarData, footerData, modalData } from '../config/dynamicStyles';

const HomeScreen = () => {
  const { style, text } = containerData;
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <NavBar data={navBarData} />
      <Container style={style}>
        <Text style={{
          color: text.color,
          fontSize: text.fontSize,
          textAlign: text.textAlign,
          fontWeight: text.fontWeight
        }}>
          {text.content}
        </Text>
      </Container>
      <Grid data={gridData} />
      <Card data={cardData} />

      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <Modal
        data={modalData}
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />

      <Footer data={footerData} />
      <Sidebar data={sidebarData} />
    </ScrollView>
  );
};

export default HomeScreen;
