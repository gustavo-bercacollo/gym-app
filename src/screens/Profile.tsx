import { ScrollView } from "react-native";
import { ScreenHeader } from "@components/ScreenHeader";
import { VStack, Center  } from "@gluestack-ui/themed";
import { UserPhoto } from "@components/userPhoto";

export function Profile() {
  return(
    <VStack flex={1}>
      <ScreenHeader title="Perfil"/>

      <ScrollView contentContainerStyle={{ paddingBottom: 36}}>
        <Center mt="$6" px="$10">
        <UserPhoto
        source={{uri: "https://github.com/gustavo-bercacollo.png" }}
        alt="Foto do usuário"   
        size="xl"     
        />
        </Center>
      </ScrollView>
    </VStack>
  )
}