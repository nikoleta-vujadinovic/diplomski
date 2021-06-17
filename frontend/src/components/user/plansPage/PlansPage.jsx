import {
  Box,
  Center,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout"
import { useEffect, useState } from "react"
import Plan from "./Plan"

import { planService } from "../../../services/PlanService"

import Loading from "../../Loading"
import { CheckCircleIcon } from "@chakra-ui/icons"

const PlansPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [plans, setPlans] = useState([])
  useEffect(() => {
    setIsLoading(true)
    planService
      .getAllPlans()
      .then((plans) => {
        setPlans(plans)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])
  if (isLoading) {
    return <Loading />
  }
  return (
    <Box>
      <VStack spacing={2} textAlign="center" marginTop="85px">
        <Heading as="h1" fontSize="4xl">
          Planovi koji Vama odgovaraju
        </Heading>
        <Text>blalababbbbbbbbbbb</Text>
      </VStack>

      <Center py="100px">
        <Stack direction="row" spacing="10" marginTop="-60px">
          {plans.map((plan) => (
            <Plan plan={plan} key={plan.id} />
          ))}
        </Stack>
      </Center>
    </Box>
  )
}
export default PlansPage
