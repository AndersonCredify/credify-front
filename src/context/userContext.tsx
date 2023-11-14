"use client";

import { createContext, ReactNode, useState } from "react";

type ContextProps = {
  children: ReactNode;
};

type ContextType = {
  user: {
    authenticationCode: string;
    idLogon: number;
    code: string;
    password: string;
    email: string;
    activationDate: string;
    validationCode: string;
    errorMessenger: string;
  };
  setUser: (newValue: {
    authenticationCode: string;
    idLogon: number;
    code: string;
    password: string;
    email: string;
    activationDate: string;
    validationCode: string;
    errorMessenger: string;
  }) => void;
};

const initialValue = {
  user: {
    authenticationCode: "",
    idLogon: 0,
    code: "",
    password: "",
    email: "",
    activationDate: "",
    validationCode: "",
    errorMessenger: "",
  },
  setUser: () => {},
};

export const UserContext = createContext<ContextType>(initialValue);

export const UserContextProvider = ({ children }: ContextProps) => {
  const [user, setUser] = useState(initialValue.user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
