import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  background-color: #fff;

  flex: 1;
`;

export const Title = styled.Text`
  margin-top: 124px;

  text-align: center;

  font-size: 32px;
  font-family: Ubuntu_700Bold;
`;

export const ContainerInputButton = styled.View`
  margin-top: 60px;

  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const GroupInput = styled.View`
  width: 80%;
  margin-left: -20px;

  border-top-right-radius: 120px;
  border-bottom-right-radius: 120px;

  border-width: 1px;
  border-color: #999;
`;

export const InputBlock = styled.View`
  padding-left: 24px;

  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  padding-left: 16px;

  height: 75px;
  width: 75%;

  border-bottom-width: 1px;
  border-color: #999;

  font-family: Ubuntu_700Bold;
`;

export const LastInput = styled.TextInput`
  padding-left: 16px;

  height: 75px;
  width: 75%;

  font-family: Ubuntu_700Bold;
`

export const ButtonLogin = styled.TouchableOpacity``;

export const ContainerButtonBottom = styled.View`
  margin-top: 32px;

  flex: 1;
  align-items: flex-start;
`;

export const Button = styled.TouchableOpacity`
  margin-left: -5px;

  padding-left: 24px;
  padding-top: 24px;
  padding-bottom: 24px;

  width: 40%;

  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;

  elevation: 3;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  font-family: Ubuntu_700Bold;
`
