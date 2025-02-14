import { useState } from "react";

import { ScrollView, TouchableOpacity } from "react-native";
import { ScreenHeader } from "@components/ScreenHeader";
import { VStack, Center, Text, Heading  } from "@gluestack-ui/themed";
import { UserPhoto } from "@components/userPhoto";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import * as ImagePicker from "expo-image-picker"

export function Profile() {
  
  const [userPhoto, setUserPhoto] = useState("https://github.com/gustavo-bercacollo.png");

  async function handleUserPhotoSelect() {
    const photoSelected = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (photoSelected.canceled) {
      return;
    }

    setUserPhoto(photoSelected.assets[0].uri);
  }

  return(
    <VStack flex={1}>
      <ScreenHeader title="Perfil"/>

      <ScrollView contentContainerStyle={{ paddingBottom: 36}}>
        <Center mt="$6" px="$10">
        <UserPhoto
        source={{uri: userPhoto }}
        alt="Foto do usuário"   
        size="xl"     
        />
        
        <TouchableOpacity onPress={handleUserPhotoSelect}>
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

        <Heading
        alignSelf="flex-start"
        fontFamily="$heading"
        color="$gray200"
        fontSize="$md"
        mt="$12"
        mb="$2"
        >
          Alterar senha
       </Heading>
        <Center w="$full" gap="$4">
        <Input placeholder="Senha antiga" bg="$gray600" secureTextEntry/>
        <Input placeholder="nova senha" bg="$gray600" secureTextEntry/>
        <Input placeholder="Confirme a nova senha " bg="$gray600" secureTextEntry/>

        <Button title="Atualizar"/>
        </Center>

      </Center>

      
      </ScrollView>
    </VStack>
  )
}