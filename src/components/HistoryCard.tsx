import { Heading, HStack, Text, VStack} from "@gluestack-ui/themed";

type Props = {
  exerciseName: string
  description: string
  time: string
}
export function HistoryCard({ exerciseName, description, time}: Props) {
  return(
    <HStack
    w="$full"
    bg="$gray600"
    px="$5"
    py="$4"
    rounded="$md"
    alignItems="center"
    justifyContent="space-between"
    >
      <VStack mr="$5" >
        <Heading 
        color="$white" 
        fontSize="$md" 
        textTransform="capitalize"
        fontFamily="$heading"
        >
          {exerciseName}
        </Heading>
        <Text 
        color="$gray100"
        fontSize="$lg"
        numberOfLines={1}
        >
          {description}
        </Text>
      </VStack>

      <Text 
        color="$gray200"
        fontSize="$md"
        >
          {time} 
        </Text>
    </HStack>
  );
}