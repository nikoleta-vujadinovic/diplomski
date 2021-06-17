import { Button, IconButton } from "@chakra-ui/button"
import { FormControl, FormHelperText, FormLabel } from "@chakra-ui/form-control"
import { ViewIcon, ViewOffIcon, WarningIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input"
import { Box, Stack } from "@chakra-ui/layout"
import { ModalBody, ModalFooter } from "@chakra-ui/modal"
import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { userService } from "../../../services/UserService"
import Loading from "../../Loading"

const RegisterForm = (props) => {
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "Korisnik",
  })

  const [errorMessage, setErrorMessage] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    passwordCheckError: "",
    roleError: "",
  })

  const validation = () => {
    if (user.firstName === "") {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        firstNameError: "Ovo polje ne sme biti prazno",
      }))
    } else if (user.firstName.length < 2) {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        firstNameError: "Ime mora imati minimum 2 slova",
      }))
    } else if (user.firstName.length > 50) {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        firstNameError: "Ime može imati maksimum 50 slova",
      }))
    } else {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        firstNameError: "",
      }))
    }

    if (user.lastName === "") {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        lastNameError: "Ovo polje ne sme biti prazno",
      }))
    } else if (user.lastName.length < 2) {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        lastNameError: "Prezime mora imati minimum 2 slova",
      }))
    } else if (user.lastName.length > 50) {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        lastNameError: "Prezime može imati maksimum 50 slova",
      }))
    } else {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        lastNameError: "",
      }))
    }

    if (user.email === "") {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        emailError: "Ovo polje ne sme biti prazno",
      }))
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        user.email
      )
    ) {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        emailError: "E-mail mora biti unet u ispravnom formatu",
      }))
    } else {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        emailError: "",
      }))
    }
    if (user.password === "") {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        passwordError: "Ovo polje ne sme biti prazno",
      }))
    } else if (user.password.length < 6) {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        passwordError: "Šifra mora sadržati minimum 6 karaktera",
      }))
    } else if (user.password.length > 50) {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        passwordError: "Šifra može sadržati maksimum 50 karaktera",
      }))
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(user.password)
    ) {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        passwordError:
          "Šifra mora sadržati makar jedno veliko slovo, malo slovo i broj",
      }))
    } else {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        passwordError: "",
      }))
    }
  }

  const [passwordCheck, setPasswordCheck] = useState(null)

  const [showPassword, setShowPassword] = useState(false)
  const handleClickPassword = () => setShowPassword(!showPassword)

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
    setErrorMessage({
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      passwordError: "",
      passwordCheckError: "",
    })
  }

  const onRegister = () => {
    validation()
    if (
      validation.firstNameError === "" &&
      validation.lastNameError === "" &&
      validation.emailError === "" &&
      validation.passwordError === ""
    ) {
      userService.createUser(user).then(() => {
        history.push("/")
      })
    }
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
              placeholder="Ukucajte Vaše ime"
              onChange={onInputChange}
              focusBorderColor="#3bd97c"
              marginBottom="10px"
            />
            {errorMessage.firstNameError === "" ? (
              <FormHelperText marginTop="-5px" fontSize="xs" color="white">
                <p>blabla</p>
              </FormHelperText>
            ) : (
              <FormHelperText marginTop="-5px" marginLeft="5px" fontSize="xs">
                {errorMessage.firstNameError}
              </FormHelperText>
            )}
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
              placeholder="Ukucajte Vaše prezime"
              onChange={onInputChange}
              focusBorderColor="#3bd97c"
              marginBottom="10px"
            />
            {errorMessage.lastNameError === "" ? (
              <FormHelperText marginTop="-5px" fontSize="xs" color="white">
                <p>blabla</p>
              </FormHelperText>
            ) : (
              <FormHelperText marginTop="-5px" marginLeft="5px" fontSize="xs">
                {errorMessage.lastNameError}
              </FormHelperText>
            )}
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
              placeholder="Ukucajte Vaš e-mail"
              onChange={onInputChange}
              focusBorderColor="#3bd97c"
              marginBottom="10px"
            />
            {errorMessage.emailError === "" ? (
              <FormHelperText marginTop="-5px" fontSize="xs" color="white">
                <p>blabla</p>
              </FormHelperText>
            ) : (
              <FormHelperText marginTop="-5px" marginLeft="5px" fontSize="xs">
                {errorMessage.emailError}
              </FormHelperText>
            )}
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
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                value={user.password}
                variant="outline"
                placeholder="Ukucajte Vašu šifru"
                onChange={onInputChange}
                focusBorderColor="#3bd97c"
              />
              <InputRightElement>
                <IconButton
                  onClick={handleClickPassword}
                  //colorScheme={teal}
                  icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
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
            {errorMessage.passwordError === "" ? (
              <FormHelperText
                marginLeft="7px"
                marginTop="3px"
                fontSize="xs"
                color="white"
              >
                <p>blabla</p>
              </FormHelperText>
            ) : (
              <FormHelperText marginLeft="7px" marginTop="3px" fontSize="xs">
                {errorMessage.passwordError}
              </FormHelperText>
            )}
          </FormControl>
        </form>
      </ModalBody>
      <ModalFooter marginTop="10px">
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
            onClick={onRegister}
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
            Registruj se
          </Button>
        </Stack>
      </ModalFooter>
    </>
  )
}
export default RegisterForm
