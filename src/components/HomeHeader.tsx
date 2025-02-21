import { HStack, Text, Heading, VStack, Icon } from "@gluestack-ui/themed";
import { UserPhoto } from "./userPhoto";
import { LogOut } from "lucide-react-native"
import { useAuth } from "@hooks/userAuth";
import defaultUserPhotoImage from "@assets/userPhotoDefault.png";
import { TouchableOpacity } from "react-native";

export function HomeHeader() {

  const { user, signOut } = useAuth();

  return(
    <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap="$4">
      <UserPhoto 
      source={ user.avatar ? {uri: user.avatar} : defaultUserPhotoImage }
      w="$16"
      h="$16"
      alt="Foto de Gustavo"
      />
      <VStack flex={1}>
      <Text color="$gray100" fontSize="$sm">
        Olá
      </Text>
      <Heading color="$gray100" fontSize="$md">
        {user.name}
      </Heading>
      </VStack>
      <TouchableOpacity onPress={signOut}>
        <Icon as={LogOut} size="xl" color="$gray200"/>
      </TouchableOpacity>
      
    </HStack>
  );
}