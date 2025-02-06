import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { GluestackUIProvider, Center, Text } from '@gluestack-ui/themed';
import { config } from "./config/gluestack-ui.config"
import { Loading } from '@components/loading';
import { SignIn } from '@screens/signIn';
 
export default function App() {
 
 const [fontsLoaded] =  useFonts({ Roboto_400Regular, Roboto_700Bold });



  return (
  <GluestackUIProvider config={config}>

      <StatusBar 
      barStyle="light-content" 
      backgroundColor={'transparent'}
      translucent
      />
      {fontsLoaded ? <SignIn/>: <Loading />} 
  
  </GluestackUIProvider>
  );
}
