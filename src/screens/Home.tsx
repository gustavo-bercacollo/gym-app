import { Heading, HStack, VStack, Text } from "@gluestack-ui/themed";
import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";
import { useState } from "react";
import { FlatList } from "react-native";
import { ExerciseCard } from "@components/ExerciseCard";

export function Home() {

  const[groups, setGroups] = useState(["grupo 1", "grupo 2", "grupo 3", "grupo 4" ])
  const[groupSelect, setGroupSelect] = useState("costa")
  


  return(
    <VStack flex={1}>
      <HomeHeader/>

      <FlatList
      data={groups}
      keyExtractor={(item) => item}
      renderItem={({item}) => (
      <Group 
      name={item} 
      isActive={groupSelect === item}
      onPress={() => setGroupSelect(item)}
      />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 32 }}
      style={{ marginVertical: 40, maxHeight: 44, minWidth:44 }}
      />
      <HStack px="$8" justifyContent="space-between" mb="$5" alignItems="center">
       <Heading color="$gray200" fontSize="$md" fontFamily="$heading">
        Exercícios
       </Heading>

       <Text color="$gray200" fontSize="$sm" fontFamily="$body">
        4
       </Text>
      </HStack>

      <ExerciseCard 
      exerciseName="Puxada frontal" 
      description="3 séries x 12 repetições"
      imageUrl="https://static.wixstatic.com/media/2edbed_60c206e178ad4eb3801f4f47fc6523df~mv2.webp/v1/fill/w_350,h_375,al_c/2edbed_60c206e178ad4eb3801f4f47fc6523df~mv2.web"
      />

    

    </VStack>
  )
}