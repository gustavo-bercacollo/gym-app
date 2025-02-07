import { VStack, Image, Center, Text, Heading } from "@gluestack-ui/themed"
import BackgroundImg from "@assets/background.png"
import Logo from "@assets/logo.svg"
import { Input } from "@components/Input"
import { Button } from "@components/Button"

export function SignIn() {
    return (
      <VStack flex={1} bg="$gray700">
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
            <Input 
              placeholder="Email" 
              keyboardType="email-address"
              autoCapitalize="none"
              />
            <Input placeholder="Senha" secureTextEntry/>

            <Button 
              title="Acessar"> 

            </Button>

          </Center>

          <Center flex={1} justifyContent="flex-end" mt="$4">
            <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">
              Não tem uma conta? 
            </Text>
            <Button 
              title="Criar conta"
              variant="outline"
              />
          </Center>
          
        </VStack>
      </VStack>  
    )
}