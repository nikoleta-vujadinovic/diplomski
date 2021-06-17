import { Box, VStack } from "@chakra-ui/react"
import { useState } from "react"
import OrderForm from "./OrderForm"
import StepsBar from "./StepsBar"

const OrderPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop="90px"
    >
      <StepsBar />
      <OrderForm />
    </Box>
  )
}
export default OrderPage
