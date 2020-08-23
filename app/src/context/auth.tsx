import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../service/api';

interface IAuthContextData {
  signed: boolean;
  loading: boolean;
  login(data: object): Promise<void>;
  singOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageSigned = await AsyncStorage.getItem('@RNAuth:signed');
      const storageToken = await AsyncStorage.getItem('@RNAuth:token');
    
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (storageToken && storageSigned === "true") {
        api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;
        setSigned(!!storageSigned);
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function login(data) {
    const response = await api.post('/session', data);
    const { token } = response.data;

    setSigned(true);

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    await AsyncStorage.setItem('@RNAuth:signed', "true");
    await AsyncStorage.setItem('@RNAuth:token', token);
  }

  function singOut() {
    AsyncStorage.clear().then(() => {
      setSigned(false);
    });
  }

  return (
    <AuthContext.Provider value={{signed, loading, login, singOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
};
