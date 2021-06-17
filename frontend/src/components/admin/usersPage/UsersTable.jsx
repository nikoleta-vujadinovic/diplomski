import { DeleteIcon, EditIcon } from "@chakra-ui/icons"
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Tfoot,
  Td,
  TableCaption,
  Center,
  IconButton,
} from "@chakra-ui/react"

const UsersTable = (props) => {
  return (
    <Center
      marginTop="50px"
      border="1px solid black"
      borderColor="gray.200"
      borderRadius="30px"
      p="10px"
    >
      <Table variant="simple" w="600px">
        <TableCaption>Svi korisnici</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Ime</Th>
            <Th>Prezime</Th>
            <Th>E-mail</Th>
            <Th>Uloga</Th>
            <Th isNumeric>Izmeni</Th>
            <Th isNumeric>Izbriši</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.firstName}</Td>
              <Td>{user.lastName}</Td>
              <Td>{user.email}</Td>
              <Td>{user.role}</Td>
              <Td>
                <IconButton bg="white" icon={<EditIcon />} />
              </Td>
              <Td>
                <IconButton bg="white" icon={<DeleteIcon />} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Center>
  )
}
export default UsersTable
