import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from "./config/gluestack-ui.config"
import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';
import { AuthContext } from '@contexts/AuthContext';

 
export default function App() {
 
 const [fontsLoaded] =  useFonts({ Roboto_400Regular, Roboto_700Bold });



  return (
  <GluestackUIProvider config={config}>

      <StatusBar 
      barStyle="light-content" 
      backgroundColor={'transparent'}
      translucent
      />
      <AuthContext.Provider value={{
        user: {
          id: "user",
          name: "User",
          email: "user@example.com",
          avatar: "https://example.com/user.jpg"
        }
      }}>
        {fontsLoaded ? <Routes/>: <Loading />} 
      </AuthContext.Provider>
      
  
  </GluestackUIProvider>
  );
}
