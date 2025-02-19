import { useContext } from "react";
import { AuthContext } from "@contexts/AuthContext";
import { NavigationContainer, DefaultTheme} from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { gluestackUIConfig } from "../../config/gluestack-ui.config";
import { Box } from "@gluestack-ui/themed";
import { AppRoutes } from '@routes/app.routes';

export function Routes() {

  console.log("Componente Routes está sendo renderizado...");
  const contextData = useContext(AuthContext);
  console.log(contextData);
  

  const theme = DefaultTheme
  theme.colors.background = gluestackUIConfig.tokens.colors.gray700

  return (
    <Box flex={1} bg= "$gray700">
    <NavigationContainer theme={theme}>
      <AuthRoutes />
    </NavigationContainer>
    </Box>
  );
}