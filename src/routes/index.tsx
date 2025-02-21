import { useAuth } from "@hooks/userAuth";
import { NavigationContainer, DefaultTheme} from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { gluestackUIConfig } from "../../config/gluestack-ui.config";
import { Box } from "@gluestack-ui/themed";
import { AppRoutes } from '@routes/app.routes';
import { Loading } from "@components/Loading";

export function Routes() {

  const { user, isLoadingStorageData } = useAuth();
  

  const theme = DefaultTheme
  theme.colors.background = gluestackUIConfig.tokens.colors.gray700

  if (isLoadingStorageData) {
    return <Loading/>
  }
  
  return (
    <Box flex={1} bg= "$gray700">
    <NavigationContainer theme={theme}>
      {user.id ? <AppRoutes/> : <AuthRoutes />}
    </NavigationContainer>
    </Box>
  );
}