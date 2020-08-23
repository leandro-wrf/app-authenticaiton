import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  background-color: #fff;

  flex: 1;
  margin-top: ${Constants.statusBarHeight}px;
`;

export const Title = styled.Text`
  margin-top: 64px;

  font-size: 32px;
  font-weight: bold;

  text-align: center;
`;

export const ContainerInputButton = styled.View`
  margin-top: 80px;

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

  elevation: 4;
`;

export const InputBlock = styled.View`
  padding-left: 16px;

  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  padding-left: 16px;

  border-bottom-width: 1px;

  height: 75px;
  width: 75%;
`;

export const LastInput = styled.TextInput`
  padding-left: 16px;

  height: 75px;
  width: 75%;
`

export const ButtonLogin = styled.TouchableOpacity`
   background-color: blue;

   height: 80px;
   width: 80px;

   left: -50px;

   border-radius: 50px;

   justify-content: center;
   align-items: center;
   
   elevation: 4;
`;

export const ContainerButtonBottom = styled.View`
  margin-top: 32px;

  flex: 1;
  align-items: flex-start;
`;

export const Button = styled.TouchableOpacity`
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
  font-weight: bold;
`
