import React, { useState } from 'react';
import { AntDesign, Fontisto, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '../../service/api';

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

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  async function handleLogin() {
    api.post('/session').then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    })
  }

  function handleNavigateToRegister() {
    navigation.navigate('Register')
  }

  return (
    <Container>
      <Title>Login</Title>

      <ContainerInputButton>
        <GroupInput>
          <InputBlock>
            <Entypo name="email" size={25} color="#000" />
            <Input
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
            />
          </InputBlock>
          <InputBlock>
            <Fontisto name="locked" size={25} color="#000" />
            <LastInput 
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
            />
          </InputBlock>
        </GroupInput>

        <ButtonLogin onPress={handleLogin}>
          <AntDesign name="arrowright" size={28} color="#000" />
        </ButtonLogin>
      </ContainerInputButton>

      <ContainerButtonBottom>
        <Button onPress={handleNavigateToRegister}>
          <ButtonText>Register</ButtonText>
        </Button>
      </ContainerButtonBottom>
    </Container>
  )
};

export default SignIn;
