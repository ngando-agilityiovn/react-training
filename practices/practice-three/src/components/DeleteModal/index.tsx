import ModalCustom from '@/components/ModalCustom'
import { Button, Flex, Text } from '@chakra-ui/react'

interface IProductDeleteProps {
  isOpenDeleteModal: boolean
  setOpenDeteleModal: (value: boolean) => void
  deleteProduct: () => void
}

const ProjectDeleteModal = ({
  isOpenDeleteModal,
  setOpenDeteleModal,
  deleteProduct: deleteProduct
}: IProductDeleteProps) => {
  return (
    <ModalCustom
      title="Delete product"
      isOpen={isOpenDeleteModal}
      onClose={() => setOpenDeteleModal(false)}
    >
      <Text px="6">
        Are you sure you want to delete this product? If you delete, it will be
        permanently lost.
      </Text>
      <Flex px="6" justifyContent="flex-end" gap="5" mt="8">
        <Button variant="ghost" onClick={() => setOpenDeteleModal(false)}>
          Cancel
        </Button>
        <Button variant="ghost" color="red" onClick={() => deleteProduct()}>
          Delete
        </Button>
      </Flex>
    </ModalCustom>
  )
}

export default ProjectDeleteModal
