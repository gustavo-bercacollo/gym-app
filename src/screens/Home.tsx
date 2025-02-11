import { HStack, VStack } from "@gluestack-ui/themed";
import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";
import { useState } from "react";

export function Home() {

  const[groupSelect, setGroupSelect] = useState("costa")
  


  return(
    <VStack flex={1}>
      <HomeHeader/>

      <HStack>
      <Group name="costa" 
      isActive={groupSelect === "costa"}
      onPress={() => setGroupSelect("costa")}
      />

      <Group name="ombro" 
      isActive={groupSelect === "ombro"}
      onPress={() => setGroupSelect("ombro")}
      />


      
      </HStack>
      
    </VStack>
  )
}