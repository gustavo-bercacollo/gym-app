import { useState } from "react"
import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed"
import BackgroundImg from "@assets/background.png"
import Logo from "@assets/logo.svg"
import { Input } from "@components/Input"
import { Button } from "@components/Button"
import { useNavigation } from "@react-navigation/native"
import { useForm, Controller } from "react-hook-form"
import { AuthNavigatorRoutesProps } from "@routes/auth.routes"

export function SignUp() {

  type FormDataProps = {
    name: string;
    email: string;
    password: string;
    password_confirm: string;
  } 

  const { control, handleSubmit } = useForm<FormDataProps>();

  const navigator = useNavigation<AuthNavigatorRoutesProps>();

  function handleSignIn() {
    navigator.navigate("SignIn");
  }

  function handleSignUp(data: any) {
    console.log(data);
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1}>
        <Image
          w="$full"
          h={624}
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="People training"
          position="absolute"
        />

        <VStack flex={1} px="$10" pb="$16">
          <Center my="$24">
            <Logo />
            <Text color="$gray100" fontSize="$sm">Treine seu corpo e sua mente.</Text>
          </Center>

          <Center flex={1} gap="$2">
            <Heading color="$gray100">Crie sua conta</Heading>

            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input placeholder="Nome" onChangeText={onChange} value={value} />
              )}
            />

            <Controller
              control={control}
              name="email" 
              render={({ field: { onChange, value } }) => (
                <Input placeholder="Email" keyboardType="email-address" autoCapitalize="none" onChangeText={onChange} value={value} />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input placeholder="Senha" secureTextEntry onChangeText={onChange} value={value} />
              )}
            />

            <Controller
              control={control}
              name="password_confirm"
              render={({ field: { onChange, value } }) => (
                <Input placeholder="Confirme a Senha" secureTextEntry onChangeText={onChange} value={value} onSubmitEditing={handleSubmit(handleSignUp)} returnKeyType="send"/>
              )}
            />

            <Button 
              title="Criar e acessar" 
              onPress={handleSubmit(handleSignUp)} 
            />

          </Center>

          <Button onPress={handleSignIn} mt="$12" title="Voltar para o login" variant="outline" />
        </VStack>
      </VStack>
    </ScrollView>
  );
}
