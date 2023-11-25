import { Box, Button, Flex, FormControl } from '@chakra-ui/react'
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

export const Form = () => {
  return (
    <FormControl>
      <Box mb="1.25rem">
        <InputField
          label="Project name"
          name="name"
          type="text"
          placeholder=""
          marginBot="1.563rem"
        />
        <ProjectTagManager title="Project manager (PM)" tagsList={tagsList} />
        <ResourceGroup
          title="Resources"
          variant="outline"
          tagGroup={tagGroup}
        />
        <Timeline title="Timeline project" onChange={() => console.log('ss')} />
        <InputField
          label="Estimation"
          name="name"
          type="number"
          placeholder="00.00"
          children="US$"
        />
      </Box>

      <Flex justifyContent="flex-end" gap="1.25rem" mt="1rem">
        <Button variant="outline" children="Cancel" />
        <Button variant="solid" children="Add project" />
      </Flex>
    </FormControl>
  )
}
