import { ScrollView, TouchableOpacity } from "react-native";
import { ScreenHeader } from "@components/ScreenHeader";
import { VStack, Center, Text  } from "@gluestack-ui/themed";
import { UserPhoto } from "@components/userPhoto";
import { Input } from "@components/Input";

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
        
        <TouchableOpacity>
          <Text 
           color="$green500" 
           fontFamily="$heading"
           fontSize="$md"
           mt="$2"
           mb="$8"
           >
            Alterar Foto
          </Text>
        </TouchableOpacity>

        <Center w="$full" gap="$4">
          <Input placeholder="Nome" bg="$gray600"/>
          <Input 
           value="gustavovilela802@gmail.com" 
           bg="$gray600"
           isReadOnly={true}
           />
        </Center>

        </Center>

        
      </ScrollView>
    </VStack>
  )
}