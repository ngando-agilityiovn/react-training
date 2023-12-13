import { useCallback, useState } from 'react'
import { Box, Button, Flex, FormControl } from '@chakra-ui/react'

// Constants
import { REGEX, TAG_GROUP, TAG_LIST } from '@/constants'

// Types
import { ProjectParent } from '@/types'

// Utils
import { compareDate } from '@/utils'

// Components
import { InputField, ProjectTagManager, ResourceGroup, Timeline } from '..'
interface IFormProps {
  isEdit: boolean
  onClose: () => void
  onSubmitForm: (data: ProjectParent) => void
  projectDataForm: ProjectParent
  setProjectDataForm: React.Dispatch<React.SetStateAction<ProjectParent>>
}

const isValidName = (name: string) => {
  return REGEX.NAME.test(name) ? '' : 'Please enter a valid name'
}

const isValidEstimate = (estimation: number) => {
  return estimation > 0 ? '' : 'Please enter a number than 0'
}

const TableForm = ({
  isEdit,
  onClose,
  onSubmitForm,
  projectDataForm,
  setProjectDataForm,
}: IFormProps) => {
  const { resource, name, estimation, manager, start, end } =
    projectDataForm || {}

  const [errors, setErrors] = useState({
    name: '',
    startDate: '',
    endDate: '',
    estimation: '',
  })

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

  const handleSubmitForm = useCallback(() => {
    const { start, end, name } = projectDataForm

    const nameMessage = isValidName(name)
    const estimationMessage = isValidEstimate(estimation)

    const startMessage = compareDate(
      new Date(),
      new Date(start),
      'Start date must be from now',
    )
    const endMessage = compareDate(
      new Date(start),
      new Date(end),
      'End date must be after start date',
    )

    const isValidData =
      !nameMessage && !startMessage && !endMessage && !estimationMessage

    if (isValidData) {
      // Reset error messages
      setErrors({
        name: '',
        startDate: '',
        endDate: '',
        estimation: '',
      })

      return onSubmitForm(projectDataForm)
    }

    setErrors({
      name: nameMessage,
      startDate: startMessage,
      endDate: endMessage,
      estimation: estimationMessage,
    })
  }, [onSubmitForm, projectDataForm, estimation])

  return (
    <FormControl>
      <Box bg="darkToLight" py="6">
        <Box px="6">
          <InputField
            value={name}
            label="Project name"
            name="name"
            type="text"
            placeholder=""
            marginBot="6"
            onChange={handleOnChange}
            errorMessage={errors.name}
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
            errorMessage={errors.startDate || errors.endDate}
          />

          <InputField
            value={estimation}
            label="Estimation"
            name="estimation"
            type="number"
            placeholder="00.00"
            addOn="US$"
            onChange={handleOnChange}
            errorMessage={errors.estimation}
          />
        </Box>
      </Box>

      <Flex px="6" justifyContent="flex-end" gap="5" mt="8" pb="4">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="solid" onClick={handleSubmitForm}>
          {isEdit ? 'Edit' : 'Add'} project
        </Button>
      </Flex>
    </FormControl>
  )
}

export default TableForm
