import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { AntDesign, Fontisto, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../../context/auth';

import api from '../../service/api';

import background from '../../assets/background.png';

import { 
  Container,
  ContainerInputButton,
  ContainerButtonBottom,
  Title,
  GroupInput,
  InputBlock,
  Input,
  LastInput,
  Button,
  ButtonText,
  ButtonLogin
} from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const { signed, login } = useAuth();

  async function handleLogin() {
    const data = {
      email,
      password
    }
    await login(data);
  }

  function handleNavigateToRegister() {
    navigation.navigate('Register')
  }

  return (
    <Container>
      <ImageBackground source={background} style={{flex: 1}}>
      <Title>Login</Title>

      <ContainerInputButton>
        <GroupInput>
          <InputBlock>
            <Entypo name="email" size={16} color="#999" />
            <Input
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
            />
          </InputBlock>
          <InputBlock>
            <Fontisto name="locked" size={16} color="#999" />
            <LastInput 
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </InputBlock>
        </GroupInput>

        
          <ButtonLogin onPress={handleLogin}>
            <LinearGradient 
              colors={['#2AD5E0', '#33F0D9', '#3E72F5']}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                alignItems: 'center',
                justifyContent: 'center',
                left: -40,
              }}
            >
              <AntDesign name="arrowright" size={32} color="#fff" />
            </LinearGradient>
          </ButtonLogin>
      </ContainerInputButton>

      <ContainerButtonBottom>
        <Button onPress={handleNavigateToRegister}>
          <ButtonText>Register</ButtonText>
        </Button>
      </ContainerButtonBottom>
      </ImageBackground>
    </Container>
  )
};

export default Login;
