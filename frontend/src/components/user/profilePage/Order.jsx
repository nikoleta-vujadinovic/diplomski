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
  VStack,
  PopoverHeader,
} from "@chakra-ui/react"

const Order = ({ order }) => {
  const {
    onOpen: onOpenOrderPopover,
    onClose: onCloseOrderPopover,
    isOpen: isOpenOrderPopover,
  } = useDisclosure()
  return (
    <Tr>
      <Td>{order.planName}</Td>
      <Td isNumeric>
        {order.numberOfPeople * order.numberOfRecipes * order.planPricePerMeal}{" "}
        din.
      </Td>
      <Td>
        {" "}
        <Popover
          isOpen={isOpenOrderPopover}
          onClose={onCloseOrderPopover}
          placement="right"
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <IconButton
              onClick={onOpenOrderPopover}
              icon={<InfoOutlineIcon size="sm" />}
              size="sm"
            />
          </PopoverTrigger>
          <PopoverContent
            w="auto"
            minW="100px"
            _focus={{
              boxShadow: "none",
            }}
          >
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Više informacija</PopoverHeader>
            <PopoverBody>
              <VStack spacing={3} align="left">
                <Text>Broj ljudi: {order.numberOfPeople}</Text>
                <Text>Broj recepata: {order.numberOfRecipes}</Text>
                <Text>Cena jednog obroka: {order.planPricePerMeal}</Text>
                <Text>Adresa: {order.address}</Text>
                <Text>Grad: {order.city}</Text>
                <Text>Poštanski broj: {order.zipCode}</Text>
                <Text>Telefon: {order.telephone}</Text>
              </VStack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Td>
    </Tr>
  )
}
export default Order
