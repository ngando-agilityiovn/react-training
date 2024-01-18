import ModalCustom from '@/components/ModalCustom'
import { Button, Flex, Text } from '@chakra-ui/react'

interface IProjectDeleteProps {
  isOpenDeleteModal: boolean
  setOpenDeteleModal: (value: boolean) => void
  deleteProject: () => void
}

const ProjectDeleteModal = ({
  isOpenDeleteModal,
  setOpenDeteleModal,
  deleteProject
}: IProjectDeleteProps) => {
  return (
    <ModalCustom
      title="Delete project"
      isOpen={isOpenDeleteModal}
      onClose={() => setOpenDeteleModal(false)}
    >
      <Text px="6">
        Are you sure you want to delete this project? If you delete, it will be
        permanently lost.
      </Text>
      <Flex px="6" justifyContent="flex-end" gap="5" mt="8">
        <Button variant="outline" onClick={() => setOpenDeteleModal(false)}>
          Cancel
        </Button>
        <Button variant="error" onClick={() => deleteProject()}>
          Delete
        </Button>
      </Flex>
    </ModalCustom>
  )
}

export default ProjectDeleteModal
