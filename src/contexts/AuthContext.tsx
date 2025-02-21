import { UserDTO } from "@dtos/UserDTO";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "@services/api";
import { storageUserSave, storageUserGet, storageUserRemove } from "../storage/storageUser";

export type AuthContextDataProps = {
  user: UserDTO 
  SignIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  isLoadingStorageData: boolean
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {

  const [user, setUser] = useState<UserDTO>({} as UserDTO)
  const [isLoadingStorageData, setIsLoadingStorageData] = useState(true)

  async function SignIn(email: string, password: string ) {
  try {
    const { data } = await api.post('/sessions', { email, password });

    if (data.user) {
      setUser(data.user)
      storageUserSave(data.user)
    }

  } catch (error) {
    throw error
  }
  
  }

  async function signOut() {
    try {
      setIsLoadingStorageData(true)
      setUser({} as UserDTO)
      await storageUserRemove()
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingStorageData(false)
    }
  }

  async function loadUserData() {

    try {
    const userlogged = await storageUserGet()

    if (userlogged) {
      setUser(userlogged)
    }
    } catch (error) {
      throw error

    } finally {
      setIsLoadingStorageData(false)
    }
  }

  useEffect(() => {
    loadUserData()
  }, [])

  return (
  <AuthContext.Provider value={{ user, SignIn, isLoadingStorageData, signOut }}>
    {children} 
  </AuthContext.Provider>
  )
}