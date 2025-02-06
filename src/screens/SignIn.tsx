import { VStack, Image, Center, Text } from "@gluestack-ui/themed"
import BackgroundImg from "@assets/background.png"
import Logo from "@assets/logo.svg"

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

          <Center my="$24">
            <Logo/>
            <Text color="$gray100" fontSize="$sm">
              Treine seu corpo e sua mente.
            </Text>
          </Center>
      </VStack>  
    )
}