import { Box, Button, Flex, FormControl } from '@chakra-ui/react'

// Constants
import { TAG_GROUP, TAG_LIST } from '@/constants'

// Components
import { InputField, ProjectTagManager, ResourceGroup, Timeline } from '..'
import { Project } from '@/types'
import { useCallback, useState } from 'react'

interface IFormProps {
  isEdit: boolean
  onClose: () => void
  onSubmitForm: (data: Omit<Project, 'index' | 'onEditItem'>) => void
  projectDataForm: Omit<Project, 'index' | 'onEditItem'>
  setProjectDataForm: React.Dispatch<
    React.SetStateAction<Omit<Project, 'index' | 'onEditItem'>>
  >
}

const Form = ({
  isEdit,
  onClose,
  onSubmitForm,
  projectDataForm,
  setProjectDataForm,
}: IFormProps) => {
  const { resource, name, estimation, manager, start, end } =
    projectDataForm || {}

  const [selectedTags, setSelectedTags] = useState<string[]>(resource)

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

  const handleTagChange = useCallback(
    (currentTag: string) => {
      const isExist = selectedTags.find((tag) => tag === currentTag)

      if (isExist) {
        const currentTags = selectedTags.filter((tag) => tag !== currentTag)

        setSelectedTags(currentTags)
        handleOnChange(currentTag, 'resource')
      } else {
        setSelectedTags([...selectedTags, currentTag])
      }
      handleOnChange([...selectedTags, currentTag], 'resource')
    },
    [selectedTags, handleOnChange],
  )

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
          />

          <ProjectTagManager
            selectedTab={manager?.id}
            title="Project manager (PM)"
            tagsList={TAG_LIST}
            onChange={handleOnChange}
          />

          <ResourceGroup
            title="Resources"
            tagGroup={TAG_GROUP}
            handleTagChange={handleTagChange}
            selectedTags={selectedTags}
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
