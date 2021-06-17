import {
  Box,
  Button,
  Divider,
  HStack,
  Text,
  Center,
  FormControl,
  FormLabel,
  Input,
  useNumberInput,
  NumberInput,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { useOrderContext } from "../../../contexts/OrderContext"

const Step1 = () => {
  const history = useHistory()
  const { selectedPlan, onNextStep, order, setOrder } = useOrderContext()
  if (!selectedPlan) {
    history.push("/planovi")
  }

  const [totalPrice, setTotalPrice] = useState(0)

  const onInputChange = (event) => {
    setOrder((order) => ({
      ...order,
      [event.target.name]: event.target.value,
    }))
  }

  const inc = () => {
    setOrder({ ...order, numberOfRecipes: order.numberOfRecipes + 1 })
  }
  const dec = () => {
    setOrder({ ...order, numberOfRecipes: order.numberOfRecipes - 1 })
  }

  useEffect(() => {
    setTotalPrice(
      selectedPlan.pricePerMeal * order.numberOfPeople * order.numberOfRecipes +
        200
    )
  }, [order])

  return (
    <>
      <Text fontSize="xl" marginTop="10px">
        Personalizuj izabrani plan
      </Text>
      <Box display="flex" flexDirection="row" p="10px">
        <Box border="1px solid black" textAlign="left" w="375px">
          <FormControl>
            <FormLabel>Izaberite broj recepata</FormLabel>
            <HStack>
              <Button onClick={inc}>+</Button>
              <Input
                type="number"
                name="numberOfRecipes"
                value={order.numberOfRecipes}
                onInputChange={onInputChange}
              />
              <Button onClick={dec}>-</Button>
            </HStack>
          </FormControl>
          <FormControl>
            <FormLabel>Izaberite broj ljudi/porcija</FormLabel>
            <HStack>
              <Button onClick={inc}>+</Button>
              <Input
                type="number"
                name="numberOfPeople"
                value={order.numberOfPeople}
                onInputChange={onInputChange}
              />
              <Button onClick={dec}>-</Button>
            </HStack>
          </FormControl>
        </Box>
        <Box border="1px solid black" textAlign="left" w="375px" h="300px">
          <Text>Izabrani plan: {selectedPlan.name}</Text>
          <Text>Cena po obroku: {selectedPlan.pricePerMeal} din.</Text>
          <Text>
            Odabrali ste {order.numberOfRecipes} recepta nedeljno, za{" "}
            {order.numberOfPeople} osobe
          </Text>
          <Divider marginTop="100px" />
          <Text>Poštarina: 200 din.</Text>
          <Text>Ukupna cena: {totalPrice} din.</Text>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row">
        <Box flexGrow={1} />
        <Button onClick={onNextStep}>Napred</Button>
      </Box>
    </>
  )
}
export default Step1
