import { Box, Button, Image, Stack, Text, useToast } from "@chakra-ui/react"
import { useHistory } from "react-router"
import { useOrderContext } from "../../../contexts/OrderContext"
import { useUserContext } from "../../../contexts/UserContext"
import FitIcon from "./diet.svg"
const Plan = (props) => {
  const { user } = useUserContext()
  const toast = useToast()
  const { onSelectPlan } = useOrderContext()
  const history = useHistory()

  const getIcon = () => {
    switch (props.plan.name) {
      case "Fit":
        return (
          <Image
            src={FitIcon}
            height="50px"
            width="50px"
            marginTop="30px"
            alignSelf="center"
          />
        )
    }
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      maxW="330px"
      borderRadius="xl"
      bg="white"
      boxShadow="base"
      overflow="hidden"
      borderWidth="1px"
      borderColor="gray.100"
      boxShadow="lg"
      transitionTimingFunction="ease-in-out"
      transitionDuration="0.2s"
      _hover={{
        boxShadow: "2xl",
        transform: "translateY(-4px)",
      }}
    >
      <Text
        fontSize={"lg"}
        fontWeight={900}
        letterSpacing="1.3px"
        p={2}
        px={3}
        color={"green.500"}
        textTransform="uppercase"
      >
        {props.plan.name}{" "}
      </Text>
      {getIcon()}
      <Stack direction={"row"} align={"center"} justify={"center"}>
        <Text fontSize={"4xl"} fontWeight={500}>
          {props.plan.pricePerMeal}
        </Text>
        <Text>din.</Text>

        <Text color={"gray.500"}>/ po obroku</Text>
      </Stack>
      <Box bg="gray.100" px="6" py="10" marginTop="20px" h="270px">
        <Text marginBottom="70px">{props.plan.description}</Text>
        <Button
          onClick={() => {
            if (user !== null) {
              onSelectPlan(props.plan)
              history.push("/porudzbina")
            } else {
              toast({
                description:
                  "Morate biti ulogovani kako biste izvršili porudžbinu!",

                status: "warning",
                duration: 9000,
                isClosable: true,
              })
            }
          }}
          width="170px"
          bg="green.400"
          color="white"
          _hover={{
            bg: "green.500",
          }}
          _focus={{
            boxShadow: "none",
          }}
          fontWeight="600"
          letterSpacing="1px"
        >
          IZABERI
        </Button>
      </Box>
    </Box>
  )
}
export default Plan
