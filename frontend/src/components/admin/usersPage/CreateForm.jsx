import { Button } from "@chakra-ui/button"
import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { Stack } from "@chakra-ui/layout"
import { ModalBody, ModalFooter } from "@chakra-ui/modal"
import { Radio, RadioGroup } from "@chakra-ui/radio"
import { useState } from "react"
import { useHistory } from "react-router"
import { userService } from "../../../services/UserService"
import Loading from "../../Loading"

const CreateForm = (props) => {
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "Korisnik",
  })

  const [roleValue, setRoleValue] = useState(user.role)

  const onInputChange = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }))
  }

  const onReset = () => {
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "Korisnik",
    })
  }

  const onCreate = (event) => {
    event.preventDefault()
    setIsLoading(true)
    userService.createUser(user).then((user) => {
      setIsLoading(false)
      props.setUsers((users) => [...users, user])
      history.push("/admin/korisnici")
    })
  }
  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <ModalBody>
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
            <Input
              type="text"
              name="firstName"
              value={user.firstName}
              variant="outline"
              placeholder="Ukucajte ime "
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
              Prezime:
            </FormLabel>
            <Input
              type="text"
              name="lastName"
              value={user.lastName}
              variant="outline"
              placeholder="Ukucajte prezime"
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
              E-mail:
            </FormLabel>
            <Input
              type="email"
              name="email"
              value={user.email}
              variant="outline"
              placeholder="Ukucajte e-mail"
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
              Šifra:
            </FormLabel>
            <Input
              type="password"
              name="password"
              value={user.password}
              variant="outline"
              placeholder="Ukucajte šifru"
              onChange={onInputChange}
              focusBorderColor="#3bd97c"
              marginBottom="10px"
            />
          </FormControl>
          <RadioGroup
            name="role"
            onChange={(value) => setUser((user) => ({ ...user, role: value }))}
            value={user.role}
          >
            <Stack direction="row">
              <Radio
                value="Korisnik"
                colorScheme="green"
                _focus={{
                  boxShadow: "none",
                }}
                _checked={{ border: "2px solid", borderColor: "green.400" }}
              >
                Korisnik
              </Radio>
              <Radio
                value="Administrator"
                colorScheme="green"
                _focus={{
                  boxShadow: "none",
                }}
                _checked={{ border: "2px solid", borderColor: "green.400" }}
              >
                Administrator
              </Radio>
              <Radio
                value="Menadžer"
                colorScheme="green"
                _focus={{
                  boxShadow: "none",
                }}
                _checked={{ border: "2px solid", borderColor: "green.400" }}
              >
                Menadžer
              </Radio>
            </Stack>
          </RadioGroup>
        </form>
        <ModalFooter>
          <Stack direction="row" spacing={2}>
            <Button
              onClick={onReset}
              variant="ghost"
              color="gray"
              _focus={{
                boxShadow: "none",
              }}
            >
              Resetuj
            </Button>
            <Button
              type="submit"
              onClick={(event) => {
                onCreate()
                props.onClose()
              }}
              color="white"
              bgColor="#3bd97c"
              variant="solid"
              _focus={{
                boxShadow: "none",
              }}
              _hover={{
                bgColor: "gray.100",
                color: "#3bd97c",
              }}
            >
              Kreiraj
            </Button>
          </Stack>
        </ModalFooter>
      </ModalBody>
    </>
  )
}
export default CreateForm
