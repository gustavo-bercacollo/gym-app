import { UserDTO } from "@dtos/UserDTO";
import { createContext, ReactNode, useState } from "react";

export type AuthContextDataProps = {
  user: UserDTO 
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {

  const [user, setUser] = useState({
    id: "user",
    name: "User",
    email: "user@example.com",
    avatar: "https://example.com/user.jpg"
  })

  return (
  <AuthContext.Provider value={{ user }}>
    {children} 
  </AuthContext.Provider>
  )
}