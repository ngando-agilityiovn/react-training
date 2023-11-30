import { Box, Button, Flex, FormControl } from '@chakra-ui/react'

// Components
import { InputField, ProjectTagManager, ResourceGroup, Timeline } from '..'

const tagGroup = [
  {
    id: '0',
    text: 'UX/UI Design',
  },
  {
    id: '1',
    text: 'Frontend',
  },
  {
    id: '2',
    text: 'Backend',
  },
  {
    id: '3',
    text: 'Full Stack',
  },
  {
    id: '4',
    text: 'Graphic Designer',
  },
  {
    id: '5',
    text: 'Web Designer',
  },
  {
    id: '6',
    text: 'QA',
  },
]

const tagsList = [
  {
    id: '0',
    text: 'Roger Vaccaro',
  },
  {
    id: '1',
    text: 'Tatiana Dias',
  },
  {
    id: '2',
    text: 'Leo Gouse',
  },
]

const Form = () => {
  return (
    <FormControl>
      <Box bg="darkToLight" py="4">
        <Box px="6">
          <InputField
            label="Project name"
            name="name"
            type="text"
            placeholder=""
            marginBot="6"
          />
          <ProjectTagManager title="Project manager (PM)" tagsList={tagsList} />
          <ResourceGroup
            title="Resources"
            variant="outline"
            tagGroup={tagGroup}
          />
          <Timeline title="Timeline project" />
          <InputField
            label="Estimation"
            name="name"
            type="number"
            placeholder="00.00"
            addOn="US$"
          />
        </Box>
      </Box>

      <Flex px="6" justifyContent="flex-end" gap="5" mt="8">
        <Button variant="outline">Cancel</Button>
        <Button variant="solid">Add project</Button>
      </Flex>
    </FormControl>
  )
}

export default Form
