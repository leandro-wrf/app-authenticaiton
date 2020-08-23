import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../context/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <View 
        style={{
          flex: 1, 
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ActivityIndicator size="large" color="#666" />
      </View>
    )
  }

  return (
    <NavigationContainer>
      { signed ? <AppRoutes/> : <AuthRoutes /> }
    </NavigationContainer>
  )
};

export default Routes;
