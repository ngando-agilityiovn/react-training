import { Box, Button, Flex, FormControl } from '@chakra-ui/react'

// Constants
import { TAGGROUP, TAGLIST } from '@/constants'

// Components
import { InputField, ProjectTagManager, ResourceGroup, Timeline } from '..'
import { Project } from '@/types'
import { useCallback, useState } from 'react'

interface IFormProps {
  onClose: () => void
  addProject: (data: object) => void
  projectDataForm: Project
  setProjectDataForm: React.Dispatch<React.SetStateAction<Omit<Project, 'id'>>>
}

const Form = ({
  onClose,
  addProject,
  projectDataForm,
  setProjectDataForm,
}: IFormProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>(
    projectDataForm?.resource,
  )
  console.log(projectDataForm)

  const handleOnChange = useCallback(
    (value: string | number | string[], name: string) => {
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
      } else {
        setSelectedTags([...selectedTags, currentTag])
      }
      handleOnChange(selectedTags, 'resource')
      // handleOnChange(selectedTags.length + 1, 'resource')
    },
    [selectedTags, handleOnChange],
  )

  const handleAddProject = () => {
    addProject(projectDataForm)
  }

  return (
    <FormControl>
      <Box bg="darkToLight" py="4">
        <Box px="6">
          <InputField
            value={projectDataForm?.name}
            label="Project name"
            name="name"
            type="text"
            placeholder=""
            marginBot="6"
            onChange={handleOnChange}
          />

          <ProjectTagManager
            selectedTab={projectDataForm.id}
            title="Project manager (PM)"
            tagsList={TAGLIST}
            onChange={handleOnChange}
          />

          <ResourceGroup
            title="Resources"
            tagGroup={TAGGROUP}
            handleTagChange={handleTagChange}
            selectedTags={selectedTags}
          />

          <Timeline title="Timeline project" onChange={handleOnChange} />

          <InputField
            value={projectDataForm?.estimation}
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
        <Button variant="solid" onClick={handleAddProject}>
          Add project
        </Button>
      </Flex>
    </FormControl>
  )
}

export default Form
