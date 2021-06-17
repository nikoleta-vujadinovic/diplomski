import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"
import CreateForm from "./CreateForm"

const CreateModal = (props) => {
  return (
    <Modal
      isCentered
      motionPreset="slideInBottom"
      closeOnOverlayClick={false}
      isOpen={props.isOpen}
      onClose={props.onClose}
      boxShadow="md"
      size="lg"
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
        <CreateForm onClose={props.onClose} setUsers={props.setUsers} />
      </ModalContent>
    </Modal>
  )
}
export default CreateModal
