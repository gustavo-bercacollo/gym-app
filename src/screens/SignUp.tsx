import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed"
import BackgroundImg from "@assets/background.png"
import Logo from "@assets/logo.svg"
import { Input } from "@components/Input"
import { Button } from "@components/Button"
import { useNavigation } from "@react-navigation/native"
import { useForm, Controller } from "react-hook-form"
import { AuthNavigatorRoutesProps } from "@routes/auth.routes"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from "../services/api"
import { AppError } from "@utils/AppError"
import { Alert } from "react-native"
import { useState } from "react"
import { useAuth } from "@hooks/userAuth"



type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
} 

const signUpSchema = yup.object({
  email: yup.string().email().required("E-mail é obrigatório"),
  name: yup.string().required("Nome é obrigatório"),
  password: yup.string().min(8, "Senha deve ter no mínimo 8 caracteres").required("Senha é obrigatória"),
  password_confirm: yup.string()
    .oneOf([yup.ref("password")], "As senhas não coincidem")
    .required("Confirmar senha é obrigatório"),
})

export function SignUp() {

  const[ isLoading, setIsLoading ] = useState(false)

  const { SignIn } = useAuth();

  const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  const navigator = useNavigation<AuthNavigatorRoutesProps>();

  function handleSignIn() {
    navigator.navigate("SignIn");
  }


  async function handleSignUp({email, name, password } : FormDataProps) {
    try {
    
      setIsLoading(true)
      await api.post('/users', { name, email, password });

      await SignIn(email, password)

    } catch (error) {
      setIsLoading(false)
      const isAppError = error instanceof AppError
      const title = isAppError ? error.message : "Erro ao criar conta"
      console.log(error)
      
      
      Alert.alert(title, "Ocorreu um erro ao criar a conta, tente novamente mais tarde")
      
    }
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
                <Input placeholder="Nome" onChangeText={onChange} value={value} errorMessage={errors.name?.message}/>
              )}
            />

            <Controller
              control={control}
              name="email" 
              render={({ field: { onChange, value } }) => (
                <Input placeholder="Email" keyboardType="email-address" autoCapitalize="none" onChangeText={onChange} value={value} errorMessage={errors.email?.message} />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input placeholder="Senha" secureTextEntry onChangeText={onChange} value={value} errorMessage={errors.password?.message}/>
              )}
            />

            <Controller
              control={control}
              name="password_confirm"              
              render={({ field: { onChange, value } }) => (
                <Input placeholder="Confirme a Senha" secureTextEntry onChangeText={onChange} value={value} onSubmitEditing={handleSubmit(handleSignUp)} returnKeyType="send" errorMessage={errors.password_confirm?.message}/>
              )}
            />

            <Button 
              title="Criar e acessar" 
              onPress={handleSubmit(handleSignUp)} 
              isLoading={isLoading}
            />

          </Center>

          <Button onPress={handleSignIn} mt="$12" title="Voltar para o login" variant="outline" />
        </VStack>
      </VStack>
    </ScrollView>
  );
}
