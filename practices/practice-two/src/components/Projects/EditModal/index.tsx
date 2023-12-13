import TableForm from '@/components/Form'
import ModalCustom from '@/components/ModalCustom'
import { ProjectParent } from '@/types'

interface IEditModalProps {
  isOpenProductModal: boolean
  isEdit: boolean
  handleToggleProductModal: () => void
  handleSubmitForm: (data: ProjectParent) => void
  setProjectDataForm: React.Dispatch<React.SetStateAction<ProjectParent>>
  projectDataForm: ProjectParent
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
