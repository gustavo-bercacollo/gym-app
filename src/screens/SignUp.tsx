import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed"
import BackgroundImg from "@assets/background.png"
import Logo from "@assets/logo.svg"
import { Input } from "@components/Input"
import { Button } from "@components/Button"
import { useNavigation } from "@react-navigation/native"

import { AuthNavigatorRoutesProps } from "@routes/auth.routes"

export function SignUp() {

  const navigator = useNavigation<AuthNavigatorRoutesProps>()

  function handleSignIn() {
    
    navigator.navigate("SignIn")
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

          <Center flex={1} gap="$2">
            <Heading color="$gray100">
              Crie sua conta 
            </Heading>

            <Input placeholder="Nome"/>
            <Input

              placeholder="Email" 
              keyboardType="email-address"
              autoCapitalize="none"
              />
            
            <Input placeholder="Senha" secureTextEntry/>
            
            <Input placeholder="Confirme a Senha" secureTextEntry/>

            <Button 
              title="Criar e acessar"> 

            </Button>

          </Center>
          
            <Button onPress={handleSignIn}
              mt="$12"
              title="Voltar para o login"
              variant="outline"
            />      

        </VStack>
      </VStack>  
    </ScrollView>
    )
}