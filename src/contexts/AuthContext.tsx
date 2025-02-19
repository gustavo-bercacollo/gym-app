import { UserDTO } from "@dtos/UserDTO";
import { createContext, ReactNode } from "react";

export type AuthContextDataProps = {
  user: UserDTO 
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  return (
  <AuthContext.Provider value={{
    user: {
      id: "user",
      name: "User",
      email: "user@example.com",
      avatar: "https://example.com/user.jpg"
    }
  }}>
    {children} 
  </AuthContext.Provider>
  )
}