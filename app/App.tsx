import React from 'react';
import { View, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import { Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins';
import { Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import styled from 'styled-components/native';
import Routes from './src/routes/index';

import { AuthProvider } from './src/context/auth';

const Container = styled.View`
  flex: 1;
`;

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Ubuntu_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Container>
        <StatusBar style="light" />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Container>
    );
  }
}
