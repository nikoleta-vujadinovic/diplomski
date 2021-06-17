import { CheckIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Tooltip,
  useDisclosure,
  useToast,
} from "@chakra-ui/react"
import { useState } from "react"
import { useHistory } from "react-router"
import { useUserContext } from "../../../contexts/UserContext"
import { userService } from "../../../services/UserService"

const InformationForm = (props) => {
  const history = useHistory()
  const { user, setUser } = useUserContext()

  const toast = useToast()

  const { onOpen, onClose, isOpen } = useDisclosure()

  const [editableInput, setEditableInput] = useState("")

  const onInputChange = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }))
  }

  const onUpdate = () => {
    userService.updateUser(user)
  }

  const onDelete = (event) => {
    event.preventDefault()
    userService.logout()
    history.push("/")
    userService.deleteUser(user.id)
  }
  return (
    <Box
      border="1px solid"
      borderColor="gray.200"
      borderRadius="20px"
      p="10px"
      w="600px"
      h="500px"
    >
      <form>
        <FormControl>
          <FormLabel
            marginLeft="4px"
            marginBottom="-1px"
            color="gray"
            fontSize="md"
          >
            Ime:
          </FormLabel>
          <Box display="flex">
            <Input
              type="text"
              name="firstName"
              value={user.firstName}
              variant="filled"
              isDisabled={!(editableInput === "firstName")}
              onChange={onInputChange}
              focusBorderColor="#3bd97c"
            />
            <Tooltip label="Izmeni ime" placement="right" bg="gray">
              <IconButton
                _focus={{
                  boxShadow: "none",
                }}
                _hover={{
                  textDecoration: "none",
                }}
                bg={editableInput === "firstName" ? "green.300" : "gray.100"}
                icon={
                  editableInput === "firstName" ? (
                    <CheckIcon color="white" />
                  ) : (
                    <EditIcon />
                  )
                }
                marginLeft="10px"
                onClick={() => {
                  if (editableInput === "firstName") {
                    setEditableInput("")
                    onUpdate()
                    if (onUpdate) {
                      toast({
                        title: "Uspešna izmena!",
                        status: "success",
                        isClosable: true,
                        duration: 2000,
                      })
                    } else {
                      toast({
                        title: "Neuspešna izmena!",
                        status: "error",
                        isClosable: true,
                        duration: 2000,
                      })
                    }
                  } else {
                    setEditableInput("firstName")
                  }
                }}
              />
            </Tooltip>
          </Box>
        </FormControl>

        <FormControl>
          <FormLabel
            marginLeft="4px"
            marginBottom="-1px"
            color="gray"
            fontSize="md"
          >
            Prezime:
          </FormLabel>
          <Box display="flex">
            <Input
              type="text"
              name="lastName"
              value={user.lastName}
              placeholder="Ukucajte novo prezime"
              variant="filled"
            />
            <IconButton icon={<EditIcon />} marginLeft="10px" />
          </Box>
        </FormControl>
        <FormControl>
          <FormLabel
            marginLeft="4px"
            marginBottom="-1px"
            color="gray"
            fontSize="md"
          >
            E-mail:
          </FormLabel>
          <Box display="flex">
            <Input
              type="email"
              name="email"
              value={user.email}
              placeholder="Ukucajte novi e-mail"
              variant="filled"
            />
            <IconButton icon={<EditIcon />} marginLeft="10px" />
          </Box>
        </FormControl>
        <FormControl>
          <FormLabel
            marginLeft="4px"
            marginBottom="-1px"
            color="gray"
            fontSize="md"
          >
            Šifra:
          </FormLabel>
          <Box display="flex">
            <Input
              type="password"
              name="password"
              value={user.password}
              placeholder="Ukucajte novu šifru"
              variant="filled"
            />
            <IconButton icon={<EditIcon />} marginLeft="10px" />
          </Box>
        </FormControl>
        <Popover
          isOpen={isOpen}
          onClose={onClose}
          placement="right"
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <Button leftIcon={<DeleteIcon />} float="left" onClick={onOpen}>
              Izbriši nalog
            </Button>
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
            <PopoverHeader textAlign="left">Warning</PopoverHeader>
            <PopoverBody textAlign="left">
              <Text>Da li ste sigurni da želite da izbrišete nalog?</Text>
            </PopoverBody>
            <PopoverFooter p="10px" textAlign="right">
              <Button variant="ghost" color="green.300" onClick={onClose}>
                Ne
              </Button>
              <Button bg="green.300" color="white" onClick={onDelete}>
                Da
              </Button>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </form>
    </Box>
  )
}
export default InformationForm
