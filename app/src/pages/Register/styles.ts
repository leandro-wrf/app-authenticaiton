import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  background-color: #fff;

  flex: 1;
  margin-top: ${Constants.statusBarHeight}px;
`;

export const ContainerButtonTop = styled.View`
  margin-top: 32px;
  margin-bottom: 64px;

  align-items: flex-end;
`;

export const Button = styled.TouchableOpacity`
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
  font-weight: bold;
`

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;

  text-align: center;
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

  elevation: 4;
`;

export const InputBlock = styled.View`
  padding-left: 8px;

  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  padding-left: 16px;

  border-bottom-width: 1px;

  height: 60px;
  width: 75%;
`;

export const LastInput = styled.TextInput`
  padding-left: 16px;

  height: 60px;
  width: 75%;
`

export const ButtonRegister = styled.TouchableOpacity`
   background-color: blue;

   height: 80px;
   width: 80px;

   left: -50px;

   border-radius: 50px;

   justify-content: center;
   align-items: center;
   
   elevation: 4;
`;
