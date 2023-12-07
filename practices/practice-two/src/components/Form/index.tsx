import { useCallback } from 'react'
import { Box, Button, Flex, FormControl } from '@chakra-ui/react'

// Constants
import { TAG_GROUP, TAG_LIST } from '@/constants'

// Components
import { InputField, ProjectTagManager, ResourceGroup, Timeline } from '..'
import { Project } from '@/types'

interface IFormProps {
  isEdit: boolean
  onClose: () => void
  onSubmitForm: (
    data: Omit<Project, 'index' | 'onEditItem' | 'onDeleteItem'>,
  ) => void
  projectDataForm: Omit<Project, 'index' | 'onEditItem' | 'onDeleteItem'>
  setProjectDataForm: React.Dispatch<
    React.SetStateAction<Omit<Project, 'index' | 'onEditItem' | 'onDeleteItem'>>
  >
  error: string
}

const Form = ({
  isEdit,
  onClose,
  onSubmitForm,
  projectDataForm,
  setProjectDataForm,
  error,
}: IFormProps) => {
  const { resource, name, estimation, manager, start, end } =
    projectDataForm || {}

  const handleOnChange = useCallback(
    (
      value: string | number | string[] | { id: number; img: string },
      name: string,
    ) => {
      setProjectDataForm({
        ...projectDataForm,
        [name]: value,
      })
    },
    [setProjectDataForm, projectDataForm],
  )

  const handleTagsChanged = (currentTags: string[]) => {
    handleOnChange(currentTags, 'resource')
  }

  return (
    <FormControl>
      <Box bg="darkToLight" py="4">
        <Box px="6">
          <InputField
            value={name}
            label="Project name"
            name="name"
            type="text"
            placeholder=""
            marginBot="6"
            onChange={handleOnChange}
            errorMessage={error}
          />

          <ProjectTagManager
            selectedTab={manager?.id}
            title="Project manager (PM)"
            tagsList={TAG_LIST}
            onChange={handleOnChange}
          />

          <ResourceGroup
            title="Resources"
            initialValues={resource}
            handleTagsChange={handleTagsChanged}
            tagGroup={TAG_GROUP}
          />

          <Timeline
            title="Timeline project"
            startTime={start}
            endTime={end}
            onChange={handleOnChange}
          />

          <InputField
            value={estimation}
            label="Estimation"
            name="estimation"
            type="number"
            placeholder="00.00"
            addOn="US$"
            onChange={handleOnChange}
          />
        </Box>
      </Box>

      <Flex px="6" justifyContent="flex-end" gap="5" mt="8">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="solid" onClick={() => onSubmitForm(projectDataForm)}>
          {isEdit ? 'Edit' : 'Add'} project
        </Button>
      </Flex>
    </FormControl>
  )
}

export default Form
