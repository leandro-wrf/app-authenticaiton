import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

import Routes from './src/routes/index';

const Container = styled.View`
  flex: 1;
`;

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Routes />
    </Container>
  );
}
