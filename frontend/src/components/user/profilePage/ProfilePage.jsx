import { Box, Center, HStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useUserContext } from "../../../contexts/UserContext"
import { orderService } from "../../../services/OrderService"

import InformationForm from "./InformationForm"
import OrdersList from "./OrdersList"

const ProfilePage = () => {
  const { user } = useUserContext()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    orderService.getOrdersByUser(user.id).then((orders) => setOrders(orders))
  }, [])
  return (
    <Box w="100%" marginTop="100px">
      <Center>
        <HStack>
          <InformationForm />
          <OrdersList orders={orders} />
        </HStack>
      </Center>
    </Box>
  )
}
export default ProfilePage
