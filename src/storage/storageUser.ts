import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserDTO } from "@dtos/UserDTO"
import { USER_STORAGE } from "./StorageConfig";

export const storageUserSave = async (user: UserDTO) => {

  try {
    await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user)); 
   
  } catch (error) { 
    console.log(error);
  }
 }