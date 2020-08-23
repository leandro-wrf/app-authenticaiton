import React from 'react';

import { 
  AntDesign, 
  Fontisto, 
  Entypo, 
  FontAwesome
} from '@expo/vector-icons';

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
  return (
    <Container>
      <ContainerButtonTop>
        <Button onPress={() => {}}>
          <ButtonText>Login</ButtonText>
        </Button>
      </ContainerButtonTop>

      <Title>Register</Title>

      <ContainerInputButton>
        <GroupInput>
          <InputBlock>
            <FontAwesome name="user" size={25} color="#000" />
            <Input placeholder="username" />
          </InputBlock>

          <InputBlock>
            <Entypo name="email" size={25} color="#000" />
            <Input placeholder="email" />
          </InputBlock>

          <InputBlock>
            <Fontisto name="locked" size={25} color="#000" />
            <LastInput placeholder="password" />
          </InputBlock>
        </GroupInput>

        <ButtonRegister>
          <AntDesign name="arrowright" size={32} color="#000" />
        </ButtonRegister>
      </ContainerInputButton>
    </Container>
  )
};

export default Register;