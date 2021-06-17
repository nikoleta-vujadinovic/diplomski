import { InfoOutlineIcon } from "@chakra-ui/icons"
import {
  Box,
  Table,
  TabList,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  Th,
  TableCaption,
  Center,
  IconButton,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react"
import { useUserContext } from "../../../contexts/UserContext"
import { userService } from "../../../services/UserService"
import Order from "./Order"

const OrdersList = (props) => {
  return (
    <Box
      border="1px solid"
      borderColor="gray.200"
      borderRadius="20px"
      p="10px"
      w="600px"
    >
      <Center>
        <Table variant="simple" w="400px">
          <TableCaption>Moje porudžbine</TableCaption>
          <Thead>
            <Tr>
              <Th>Naziv plana</Th>
              <Th isNumeric>Ukupna cena</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.orders.map((order) => (
              <Order key={order.id} order={order} />
            ))}
          </Tbody>
        </Table>
      </Center>
    </Box>
  )
}
export default OrdersList
