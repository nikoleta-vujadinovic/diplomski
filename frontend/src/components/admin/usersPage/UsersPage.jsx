import { useEffect, useState } from "react"
import UsersTable from "./UsersTable"
import { userService } from "../../../services/UserService"
import { Box, Center, Stack, Text, VStack } from "@chakra-ui/layout"
import { AddIcon } from "@chakra-ui/icons"
import { IconButton } from "@chakra-ui/button"
import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/stat"
import { useDisclosure } from "@chakra-ui/hooks"
import CreateModal from "./CreateModal"

const UsersPage = () => {
  const [users, setUsers] = useState([])

  const {
    isOpen: isOpenCreateModal,
    onOpen: onOpenCreateModal,
    onClose: onCloseCreateModal,
  } = useDisclosure()

  useEffect(() => {
    userService.getAllUsers().then((users) => {
      setUsers(users)
    })
  }, [])

  return (
    <VStack>
      <Box
        display="flex"
        alignItems="center"
        w="900px"
        h="50px"
        marginTop="30px"
        paddingLeft="40px"
        paddingRight="40px"
      >
        <Text>UKUPNO KORISNIKA: {users.length}</Text>
        <Box flexGrow={2} />
        <Text>DODAJ NOVOG KORISNIKA</Text>
        <IconButton
          onClick={onOpenCreateModal}
          marginLeft="5px"
          bg="white"
          icon={<AddIcon />}
          size="sm"
        />
        <CreateModal
          isOpen={isOpenCreateModal}
          onClose={onCloseCreateModal}
          setUsers={setUsers}
        />
      </Box>
      <UsersTable users={users} />
    </VStack>
  )
}
export default UsersPage
