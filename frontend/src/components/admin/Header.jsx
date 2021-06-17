import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  DrawerCloseButton,
  DrawerHeader,
  Input,
  IconButton,
  Link,
} from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/hooks"
import { useRef } from "react"
import { HamburgerIcon } from "@chakra-ui/icons"
import { Link as ReactRouterLink } from "react-router-dom"
import { useUserContext } from "../../contexts/UserContext"

const Header = () => {
  const { onUserLogout } = useUserContext()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <>
      <Box
        border="1px solid black"
        w="100%"
        h="60px"
        display="flex"
        alignItems="center"
      >
        <IconButton icon={<HamburgerIcon />} ref={btnRef} onClick={onOpen}>
          Open
        </IconButton>
        <Box flexGrow={1} />
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
          ODJAVA
        </Button>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Meni</DrawerHeader>

          <DrawerBody>
            <Box display="flex" flexDirection="column">
              <Link
                as={ReactRouterLink}
                to={"/admin"}
                onClick={onClose}
                _focus={{
                  boxShadow: "none",
                }}
                _hover={{
                  textDecoration: "none",
                }}
                marginRight={10}
              >
                Početna strana
              </Link>
              <Link
                as={ReactRouterLink}
                to={"/admin/korisnici"}
                onClick={onClose}
                _focus={{
                  boxShadow: "none",
                }}
                _hover={{
                  textDecoration: "none",
                }}
                marginRight={10}
              >
                Svi korisnici
              </Link>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default Header
