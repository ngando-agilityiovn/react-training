import { ReactNode } from 'react'

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'

interface IModalProps {
  children?: ReactNode
  title: string
  isOpen: boolean
  onClose: () => void
}

const ModalCustom = (props: IModalProps): JSX.Element => {
  const { children, title, ...rest } = props

  return (
    <Modal {...rest} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>

        <ModalCloseButton />

        <ModalBody px="0" overflow="hidden">
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalCustom
