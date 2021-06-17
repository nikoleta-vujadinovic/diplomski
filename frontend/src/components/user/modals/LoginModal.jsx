import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"
import LoginForm from "./LoginForm"

const LoginModal = (props) => {
  return (
    <Modal
      isCentered
      motionPreset="slideInBottom"
      closeOnOverlayClick={false}
      isOpen={props.isOpenLoginModal}
      onClose={props.onCloseLoginModal}
      boxShadow="md"
      size="sm"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader marginBottom="15px">
          <ModalCloseButton
            color="gray"
            _focus={{
              boxShadow: "none",
            }}
          />
        </ModalHeader>
        <LoginForm onCloseLoginModal={props.onCloseLoginModal} />
      </ModalContent>
    </Modal>
  )
}
export default LoginModal
