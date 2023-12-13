import TableForm from '@/components/Form'
import ModalCustom from '@/components/ModalCustom'
import { Project } from '@/types'

interface IEditModalProps {
  isOpenProductModal: boolean
  isEdit: boolean
  handleToggleProductModal: () => void
  handleSubmitForm: (
    data: Omit<Project, 'index' | 'onEditItem' | 'onDeleteItem'>,
  ) => void
  setProjectDataForm: React.Dispatch<
    React.SetStateAction<Omit<Project, 'index' | 'onEditItem' | 'onDeleteItem'>>
  >
  projectDataForm: Omit<Project, 'index' | 'onEditItem' | 'onDeleteItem'>
}

const ProjectEditModal = ({
  isOpenProductModal,
  isEdit,
  handleToggleProductModal,
  setProjectDataForm,
  handleSubmitForm,
  projectDataForm,
}: IEditModalProps) => {
  return (
    <ModalCustom
      title={isEdit ? 'Edit project' : 'Add project'}
      onClose={handleToggleProductModal}
      isOpen={isOpenProductModal}
    >
      <TableForm
        isEdit={isEdit}
        onClose={handleToggleProductModal}
        onSubmitForm={handleSubmitForm}
        projectDataForm={projectDataForm}
        setProjectDataForm={setProjectDataForm}
      />
    </ModalCustom>
  )
}

export default ProjectEditModal
