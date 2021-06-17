import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  ModalBody,
  ModalFooter,
  Stack,
  useColorModeValue,
  Icon,
  IconButton,
  Text,
  Box,
  FormLabel,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { userService } from "../../../services/UserService"
import { useUserContext } from "../../../contexts/UserContext"
import { useHistory } from "react-router"
import { ViewIcon, ViewOffIcon, WarningIcon } from "@chakra-ui/icons"

const LoginForm = (props) => {
  const history = useHistory()
  const { onUserLogin } = useUserContext()
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const [validation, setValidation] = useState({
    emailError: "",
    passwordError: "",
  })
  const [show, setShow] = useState(false)

  const teal = useColorModeValue("green.400", "white")

  const onInputChange = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }))
  }

  const validate = () => {
    if (user.password.length < 3) {
      setValidation((validation) => ({
        ...validation,
        passwordError: "Šifra mora sadržati više od 8 karaktera",
      }))
    } else {
      setValidation((validation) => ({
        ...validation,
        passwordError: "",
      }))
    }
  }
  const handleClick = () => setShow(!show)

  const onReset = () => {
    setUser({
      email: "",
      password: "",
    })
  }

  const onLogin = () => {
    userService.login(user).then(() => {
      userService.getCurrentUser().then((user) => {
        onUserLogin(user)
        if (user.isUser()) {
          history.push("/")
        }
        if (user.isAdmin()) {
          history.push("/admin")
        }
        if (user.isManager()) {
          history.push("/menadzer")
        }
      })
    })
  }
  useEffect(() => {
    validate()
  }, [user])
  return (
    <>
      <ModalBody marginTop="-24px">
        <form>
          <Stack spacing="3px">
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
                placeholder="Ukucajte Vaš e-mail"
                onChange={onInputChange}
                focusBorderColor="#3bd97c"
                marginBottom="10px"
              />
            </FormControl>
            <FormControl>
              <FormLabel marginLeft="4px" marginBottom="-1px" color="gray">
                Šifra:
              </FormLabel>
              <InputGroup>
                <Input
                  type={show ? "text" : "password"}
                  name="password"
                  value={user.password}
                  variant="outline"
                  placeholder="Ukucajte Vašu šifru"
                  onChange={onInputChange}
                  focusBorderColor="#3bd97c"
                />
                <InputRightElement>
                  <IconButton
                    onClick={handleClick}
                    //colorScheme={teal}
                    icon={show ? <ViewIcon /> : <ViewOffIcon />}
                    _hover={{
                      textDecoration: "none",
                      color: "#3bd97c",
                    }}
                    _focus={{
                      boxShadow: "none",
                    }}
                    variant="ghost"
                    //colorScheme="green"
                  />
                </InputRightElement>
              </InputGroup>
              {validation.passwordError === "" ? (
                <FormHelperText color="white" fontSize="xs">
                  <p>hidden</p>
                </FormHelperText>
              ) : (
                <FormHelperText fontSize="xs" marginLeft="5px">
                  <WarningIcon marginTop="-3px" color="#ff526c" w={4} h={4} />{" "}
                  {validation.passwordError}
                </FormHelperText>
              )}
            </FormControl>
          </Stack>
        </form>
      </ModalBody>
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
            onClick={() => {
              onLogin()
              props.onCloseLoginModal()
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
            Prijava
          </Button>
        </Stack>
      </ModalFooter>
    </>
  )
}
export default LoginForm
