import { Modal, ModalBody, ModalHeader,  } from "reactstrap";

const ModalComponent = ({ title ,isOpen, setOpen, children }) => {
  return (
    <>
      <Modal isOpen={isOpen} toggle={()=>setOpen(!isOpen)}>
        <ModalHeader>{title }</ModalHeader>
        <ModalBody>{children}</ModalBody>
      </Modal>
    </>
  )
}

export default ModalComponent;