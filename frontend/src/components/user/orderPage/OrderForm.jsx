import { Box } from "@chakra-ui/react"
import { useState } from "react"
import { useOrderContext } from "../../../contexts/OrderContext"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"

const OrderForm = () => {
  const { currentStep } = useOrderContext()
  const getCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />
      case 2:
        return <Step2 />
      case 3:
        return <Step3 />
      default:
        return <Step1 />
    }
  }
  return (
    <Box
      border="2px"
      borderColor="gray.200"
      borderRadius="25px"
      w="750px"
      h="450px"
    >
      {getCurrentStep()}
    </Box>
  )
}
export default OrderForm
