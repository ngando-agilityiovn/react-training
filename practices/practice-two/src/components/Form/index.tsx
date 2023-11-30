import { Box, Button, Flex, FormControl } from '@chakra-ui/react'

// Components
import { InputField, ProjectTagManager, ResourceGroup, Timeline } from '..'
import { Project, ProjectStatus } from '@/types'
import { useCallback, useState } from 'react'
import { tagGroup, tagsList } from '@/constants'

interface IFormProps {
  onClose: () => void
  addProject: (data: object) => void
}

const projectDataFormInitial: Omit<Project, 'id'> = {
  name: '',
  manager: 'Roger Vaccaro',
  status: ProjectStatus.ON_HOLD,
  updatedAt: 0,
  resource: 0,
  start: 0,
  end: 0,
  estimation: 0,
}

const Form = ({ onClose, addProject }: IFormProps) => {
  const [projectDataForm, setProjectDataForm] = useState(projectDataFormInitial)

  const handleOnChange = useCallback(
    (value: string, name: string) => {
      setProjectDataForm({
        ...projectDataForm,
        [name]: value,
      })
    },
    [setProjectDataForm, projectDataForm],
  )

  const handleAddProject = () => {
    addProject(projectDataForm)
  }

  return (
    <FormControl>
      <Box bg="darkToLight" py="4">
        <Box px="6">
          <InputField
            value={projectDataForm.name}
            label="Project name"
            name="name"
            type="text"
            placeholder=""
            marginBot="6"
            onChange={handleOnChange}
          />
          <ProjectTagManager
            title="Project manager (PM)"
            tagsList={tagsList}
            onChange={handleOnChange}
          />
          <ResourceGroup
            title="Resources"
            variant="outline"
            tagGroup={tagGroup}
            onChange={handleOnChange}
          />
          <Timeline title="Timeline project" onChange={handleOnChange} />
          <InputField
            value={projectDataForm.estimation}
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
