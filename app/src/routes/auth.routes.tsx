import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/SignIn';
import Register from '../pages/Register';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Navigator
    headerMode="none"
  >
    <Screen name="Login" component={Login} />
    <Screen name="Register" component={Register} />
  </Navigator>
);

export default AuthRoutes;
