import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"
import RegisterForm from "./RegisterForm"

const RegisterModal = (props) => {
  return (
    <Modal
      isCentered
      motionPreset="slideInBottom"
      closeOnOverlayClick={false}
      isOpen={props.isOpenRegisterModal}
      onClose={props.onCloseRegisterModal}
      boxShadow="md"
      size="lg"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader marginBottom="-10px">
          Forma za registraciju
          <ModalCloseButton
            color="gray"
            _focus={{
              boxShadow: "none",
            }}
          />
        </ModalHeader>
        <RegisterForm onCloseLoginModal={props.onCloseRegisterModal} />
      </ModalContent>
    </Modal>
  )
}
export default RegisterModal
