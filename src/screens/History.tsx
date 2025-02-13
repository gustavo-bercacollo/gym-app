import { useState } from "react";
import { SectionList } from "react-native";
import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Heading, VStack, Text } from "@gluestack-ui/themed";

export function History() {
  const[exercises, setExercises] = useState([
  {
    title: "03.02.2000",
    data: ["exercício 1", "exercício 2"]
  },
  {
    title: "04.02.2000",
    data: ["Exercício 3"]
  },
]);

  return(
    <VStack>
      <ScreenHeader title="Histórico de Exercícios"/>

      <SectionList 
      sections={exercises}
      keyExtractor={item => item}
      renderItem={({item}) => (
      <HistoryCard 
      exerciseName="Puxada" 
      description="descrição"
      time="08:40"
      />
      )}
      renderSectionHeader={({section}) => (
        <Heading 
        color="$gray200" 
        fontFamily="$heading"
        fontSize="$md"
        mt="$10"
        mb="$3"
        >{section.title}</Heading>
      )}
      style ={{ paddingHorizontal: 32}}
      contentContainerStyle={ 
        exercises.length === 0 && { flex: 1, justifyContent: "center"  }
      }


      ListEmptyComponent={() => (
        <Text textAlign="center" color="$gray100">
          Não há nenhum exercício registrado ainda.{"\n"} Vamos fazer exercícios hoje?
        </Text>
      )}
      showsVerticalScrollIndicator = {false}
      />
  
    </VStack>
  )
}