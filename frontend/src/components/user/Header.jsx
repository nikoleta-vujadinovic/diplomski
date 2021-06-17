import {
  Box,
  Link,
  useColorModeValue,
  Button,
  useDisclosure,
  Image,
} from "@chakra-ui/react"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Link as ReactRouterLink } from "react-router-dom"
import { useUserContext } from "../../contexts/UserContext"
import LoginModal from "./modals/LoginModal"
import RegisterModal from "./modals/RegisterModal"

const Header = (props) => {
  const location = useLocation()
  const { onUserLogout } = useUserContext()
  const teal = useColorModeValue("green.400", "white")
  const {
    isOpen: isOpenLoginModal,
    onOpen: onOpenLoginModal,
    onClose: onCloseLoginModal,
  } = useDisclosure()

  const {
    isOpen: isOpenRegisterModal,
    onOpen: onOpenRegisterModal,
    onClose: onCloseRegisterModal,
  } = useDisclosure()

  return (
    <Box
      w="100%"
      h="60px"
      color="gray.600"
      p="20px"
      display="flex"
      alignItems="center"
      borderBottom="1px"
      borderColor="gray.100"
      position="fixed"
      top={0}
    >
      <Link
        as={ReactRouterLink}
        to={"/"}
        p="10px"
        _focus={{
          boxShadow: "none",
        }}
        _hover={{
          textDecoration: "none",
        }}
        marginRight={10}
      >
        logo
      </Link>
      <Link
        as={ReactRouterLink}
        to={"/oNama"}
        p="10px"
        _focus={{
          boxShadow: "none",
        }}
        _hover={{
          textDecoration: "none",
          color: "#3bd97c",
        }}
        color={location.pathname === "/oNama" ? "#3bd97c" : "gray"}
      >
        O nama
      </Link>
      <Link
        as={ReactRouterLink}
        to={"/planovi"}
        p="10px"
        _focus={{
          boxShadow: "none",
        }}
        _hover={{
          textDecoration: "none",
          color: teal,
        }}
        color={location.pathname === "/planovi" ? "#3bd97c" : "gray"}
      >
        Planovi
      </Link>
      <Link
        as={ReactRouterLink}
        to={"/recepti"}
        p="10px"
        _focus={{
          boxShadow: "none",
        }}
        _hover={{
          textDecoration: "none",
          color: teal,
        }}
        color={location.pathname === "/recepti" ? "#3bd97c" : "gray"}
      >
        Naš meni
      </Link>
      {!props.isLoggedIn ? (
        <>
          <Box flexGrow="1" />
          <Button
            onClick={onOpenLoginModal}
            variant="ghost"
            _focus={{
              boxShadow: "none",
            }}
            _hover={{
              bgColor: "white",
              color: "#3bd97c",
            }}
            marginRight="15px"
          >
            Prijava
          </Button>
          <LoginModal
            isOpenLoginModal={isOpenLoginModal}
            onCloseLoginModal={onCloseLoginModal}
          />
          <Button
            onClick={onOpenRegisterModal}
            bgColor="#3bd97c"
            color="white"
            _focus={{
              boxShadow: "none",
            }}
            _hover={{
              bgColor: "green.300",
            }}
          >
            Registracija
          </Button>
          <RegisterModal
            isOpenRegisterModal={isOpenRegisterModal}
            onCloseRegisterModal={onCloseRegisterModal}
          />
        </>
      ) : (
        <>
          <Box flexGrow={1} />
          <Link
            as={ReactRouterLink}
            to={"/profil"}
            p="10px"
            _focus={{
              boxShadow: "none",
            }}
            _hover={{
              textDecoration: "none",
              color: teal,
            }}
            color={location.pathname === "/profil " ? "#3bd97c" : "gray"}
          >
            Moj profil
          </Link>
          <Button
            onClick={onUserLogout}
            bgColor="gray.50"
            _focus={{
              boxShadow: "none",
            }}
            _hover={{
              bgColor: "white",
              color: "#3bd97c",
            }}
            marginRight="15px"
          >
            Odjava
          </Button>
        </>
      )}
    </Box>
  )
}
export default Header
