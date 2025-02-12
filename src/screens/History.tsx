import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Center, Text, VStack } from "@gluestack-ui/themed";

export function History() {
  return(
    <VStack>
      <ScreenHeader title="Histórico de Exercícios"/>
      <HistoryCard 
      exerciseName="Puxada" 
      description="descrição"
      time="08:40"
      />
    </VStack>
  )
}