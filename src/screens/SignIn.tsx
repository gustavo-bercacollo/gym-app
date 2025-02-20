import { useState } from "react"
import { VStack, Image, Center, Text, Heading, ScrollView, useToast} from "@gluestack-ui/themed"
import BackgroundImg from "@assets/background.png"
import Logo from "@assets/logo.svg"
import { Input } from "@components/Input"
import { Button } from "@components/Button"
import { useNavigation } from "@react-navigation/native"
import { useForm, Controller } from "react-hook-form"
import { AuthNavigatorRoutesProps } from "@routes/auth.routes"
import { useAuth } from "@hooks/userAuth"
import { AppError } from "@utils/AppError"
import { Alert } from "react-native"

type FormData = {
  email: string,
  password: string,
}

export function SignIn() {

  const [isLoading, setIsLoading] = useState(false)

  const toast = useToast()

  const { SignIn } = useAuth()

  const {control, handleSubmit, formState: {errors}} = useForm<FormData>()

  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNewAccount() {
    navigation.navigate("SignUp")

  }

  async function handleSignIn({email, password}: FormData) {
    try {
      await SignIn(email, password)
      setIsLoading(true)

    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError ? error.message : "Erro ao acessar a conta"
      
      setIsLoading(false)

      Alert.alert(title)

    }
  }

    return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}
    showsVerticalScrollIndicator={false}
    >
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
            <Logo/>
            <Text color="$gray100" fontSize="$sm">
              Treine seu corpo e sua mente.
            </Text>
          </Center>

          <Center gap="$2">
            <Heading color="$gray100">
              Acesse a conta 
            </Heading>

            <Controller
              name="email"
              control={control}
              rules={{ required: "Email é obrigatório" }}
              render={({ field: { onChange } }) => (
              <Input 
                onChangeText={onChange} 
                placeholder="Email" 
                keyboardType="email-address"
                autoCapitalize="none"
                errorMessage={errors.email?.message}
              />
              )}
              />

            <Controller
              name="password"
              control={control}
              rules={{ required: "Senha é obrigatória" }}
              render={({ field: { onChange } }) => (
                <Input 
                placeholder="Senha" 
                secureTextEntry
                errorMessage={errors.password?.message}
                onChangeText={onChange}
                />
              )}
            />

            

            <Button 
              title="Acessar"
              onPress={handleSubmit(handleSignIn)}
              isLoading={isLoading}
              > 
              
            </Button>

          </Center>

          <Center flex={1} justifyContent="flex-end" mt="$4">
            <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">
              Não tem uma conta? 
            </Text>
            <Button onPress={handleNewAccount}
              title="Criar conta"
              variant="outline"
              />
          </Center>
          
        </VStack>
      </VStack>  
    </ScrollView>
    )
}