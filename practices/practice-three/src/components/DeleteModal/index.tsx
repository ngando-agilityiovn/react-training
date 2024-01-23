import { Button, Flex, Text } from '@chakra-ui/react'

// Components
import ModalCustom from '../ModalCustom'

interface IProductDeleteProps {
  onOpenDeleteModal: boolean
  onToggleModal: () => void
  onDeleteProduct: () => void
}

const DeleteModal = ({
  onOpenDeleteModal,
  onToggleModal,
  onDeleteProduct
}: IProductDeleteProps) => {
  return (
    <ModalCustom
      title="Delete product"
      isOpen={onOpenDeleteModal}
      onClose={onToggleModal}
    >
      <Text px="6">
        Are you sure you want to delete this product? If you delete, it will be
        permanently lost.
      </Text>
      <Flex px="6" justifyContent="flex-end" gap="5" mt="8">
        <Button variant="ghost" onClick={onToggleModal}>
          Cancel
        </Button>
        <Button variant="ghost" color="red" onClick={onDeleteProduct}>
          Delete
        </Button>
      </Flex>
    </ModalCustom>
  )
}

export default DeleteModal
