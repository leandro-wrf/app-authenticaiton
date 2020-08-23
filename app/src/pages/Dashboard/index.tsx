import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { useAuth } from '../../context/auth';

import background from '../../assets/background.png';

const Container = styled.View`
  flex: 1;
`

const Dashboard: React.FC = () => {
  const { singOut } = useAuth();

  async function handleLogout() {
    singOut();
  }

  return (
    <Container>
      <ImageBackground
        source={background}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <TouchableOpacity onPress={handleLogout}>
          <AntDesign name="poweroff" size={48} color="#000" />
        </TouchableOpacity>
      </ImageBackground>
    </Container>
  )
}

export default Dashboard;
