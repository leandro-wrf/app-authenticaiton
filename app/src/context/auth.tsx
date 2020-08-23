import React, { createContext, useState, useEffect } from 'react';

interface IAuthContextData {
  signed: boolean;
  loading: boolean;
  login(): Promise<void>;
  singOut(): void;
};

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <AuthContext.Provider
      value={{signed, loading, login, singOut}}
    >
      {children}
    </AuthContext.Provider>
  );
}
