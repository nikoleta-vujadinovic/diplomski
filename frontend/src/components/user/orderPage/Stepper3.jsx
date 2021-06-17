import {
  Icon,
  createIcon,
  Text,
  Box,
  Center,
  Circle,
  HStack,
  VStack,
} from "@chakra-ui/react"
import { Divider } from "@chakra-ui/react"
const Stepper3 = () => {
  return (
    <Center>
      <VStack>
        <Circle size="50px" bg="green.400" color="white">
          <Text fontSize="xl">1</Text>
        </Circle>
        <Text fontSize="sm">Personalizacija plana</Text>
      </VStack>
      <Divider
        borderBottomWidth="3px"
        w="200px"
        marginLeft="-25px"
        marginRight="-10px"
        variant="solid"
        borderColor="gray.500"
        marginBottom="25px"
      />
      <VStack>
        <Circle size="50px" bg="green.400" color="white">
          <Text fontSize="xl">2</Text>
        </Circle>
        <Text fontSize="sm">Odabir recepata</Text>
      </VStack>
      <Divider
        w="200px"
        borderBottomWidth="3px"
        variant="solid"
        borderColor="gray.500"
        marginLeft="-10px"
        marginRight="-35px"
        marginBottom="25px"
      />
      <VStack>
        <Circle size="50px" bg="green.400" color="white">
          <Text fontSize="xl">3</Text>
        </Circle>
        <Text fontSize="sm">Informacije o porudžbini</Text>
      </VStack>
    </Center>
  )
}
export default Stepper3
