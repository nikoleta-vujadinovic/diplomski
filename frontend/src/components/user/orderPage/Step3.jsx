import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react"
import { useOrderContext } from "../../../contexts/OrderContext"

const Step3 = () => {
  const { onPreviousStep, order, setOrder, onOrder } = useOrderContext()
  const onInputChange = (event) => {
    setOrder((order) => ({
      ...order,
      [event.target.name]: event.target.value,
    }))
  }
  return (
    <>
      <Text>Informacije o porudžbini</Text>
      <Text>{order.address}</Text>
      <FormControl>
        <FormLabel
          marginLeft="4px"
          marginBottom="-1px"
          color="gray"
          fontSize="md"
        >
          Adresa:
        </FormLabel>
        <Input
          type="text"
          name="address"
          value={order.address}
          onChange={onInputChange}
          focusBorderColor="#3bd97c"
          marginBottom="10px"
        />
      </FormControl>
      <FormControl>
        <FormLabel
          marginLeft="4px"
          marginBottom="-1px"
          color="gray"
          fontSize="md"
        >
          Grad
        </FormLabel>
        <Input
          type="text"
          name="city"
          value={order.city}
          onChange={onInputChange}
          focusBorderColor="#3bd97c"
          marginBottom="10px"
        />
      </FormControl>
      <FormControl>
        <FormLabel
          marginLeft="4px"
          marginBottom="-1px"
          color="gray"
          fontSize="md"
        >
          Poštanski broj:
        </FormLabel>
        <Input
          type="text"
          name="zipCode"
          value={order.zipCode}
          onChange={onInputChange}
          focusBorderColor="#3bd97c"
          marginBottom="10px"
        />
      </FormControl>
      <FormControl>
        <FormLabel
          marginLeft="4px"
          marginBottom="-1px"
          color="gray"
          fontSize="md"
        >
          Telefon:
        </FormLabel>
        <Input
          type="text"
          name="telephone"
          value={order.telephone}
          onChange={onInputChange}
          focusBorderColor="#3bd97c"
          marginBottom="10px"
        />
      </FormControl>
      <Button onClick={onPreviousStep}>Nazad</Button>
      <Button onClick={onOrder}>Naruči</Button>
    </>
  )
}
export default Step3
