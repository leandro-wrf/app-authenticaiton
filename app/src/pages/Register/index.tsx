import React, { useState } from 'react';
import { ImageBackground, KeyboardAvoiding } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  AntDesign, 
  Fontisto, 
  Entypo, 
  FontAwesome
} from '@expo/vector-icons';

import background from '../../assets/background.png';
import api from '../../service/api';

import { 
  Container,
  ContainerButtonTop,
  ContainerInputButton,
  GroupInput,
  InputBlock,
  Button,
  ButtonText,
  Title,
  Input,
  LastInput,
  ButtonRegister
} from './styles';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  async function handleRegister() {
    const data = {
      username,
      email,
      password
    }

    const response = await api.post('/register', data);
    navigation.goBack();
  }

  function handleNavigateToLogin() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <ImageBackground source={background} style={{flex: 1}}>
        <ContainerButtonTop>
          <Button onPress={handleNavigateToLogin}>
            <ButtonText>Login</ButtonText>
          </Button>
        </ContainerButtonTop>

        <Title>Register</Title>

        <ContainerInputButton>
          <GroupInput>
            <InputBlock>
              <FontAwesome name="user" size={18} color="#999" />
              <Input placeholder="Username" onChangeText={(text) => setUsername(text)}/>
            </InputBlock>

            <InputBlock>
              <Entypo name="email" size={18} color="#999" />
              <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
            </InputBlock>

            <InputBlock>
              <Fontisto name="locked" size={18} color="#999" />
              <LastInput placeholder="Password" onChangeText={(text) => setPassword(text)}/>
            </InputBlock>
          </GroupInput>

          <ButtonRegister onPress={handleRegister}>
            <LinearGradient 
              colors={['#2AD5E0', '#33F0D9', '#3E72F5']}
              style={{
                height: 80,
                width: 80,
                left: -40,
                borderRadius: 40,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
            <AntDesign name="check" size={32} color="#fff" />
            </LinearGradient>
          </ButtonRegister>
        </ContainerInputButton>
      </ImageBackground>
    </Container>
  )
};

export default Register;
