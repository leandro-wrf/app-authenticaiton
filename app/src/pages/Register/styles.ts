import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  background-color: #fff;

  flex: 1;
`;

export const ContainerButtonTop = styled.View`
  margin-top: 96px;
  margin-bottom: 64px;

  align-items: flex-end;
`;

export const Button = styled.TouchableOpacity`
  margin-right: -5px;

  padding-left: 48px;
  padding-top: 24px;
  padding-bottom: 24px;

  width: 40%;

  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;

  elevation: 3;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  font-family: Ubuntu_700Bold;
`

export const Title = styled.Text`
  text-align: center;

  font-size: 32px;
  font-family: Ubuntu_700Bold;
`;

export const ContainerInputButton = styled.View`
  margin-top: 64px;

  flex-direction: row;
  align-items: center;
`;

export const GroupInput = styled.View`
  width: 80%;

  border-top-right-radius: 120px;
  border-bottom-right-radius: 120px;
  border-width: 1px;
  border-color: #999;
`;

export const InputBlock = styled.View`
  padding-left: 16px;

  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  padding-left: 16px;

  height: 60px;
  width: 75%;

  border-bottom-width: 1px;
  border-color: #999;
  

  font-family: Ubuntu_700Bold;
`;

export const LastInput = styled.TextInput`
  padding-left: 16px;

  height: 60px;
  width: 75%;

  font-family: Ubuntu_700Bold;
`

export const ButtonRegister = styled.TouchableOpacity``;
